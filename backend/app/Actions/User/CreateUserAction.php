<?php

namespace App\Actions\User;

use App\Actions\Action;
use App\Exceptions\ApplicationException;
use App\Models\CashbackHistory;
use App\Models\User;
use DateTime;

class CreateUserAction extends Action
{
    public function run(...$args)
    {
        [$data] = $args;

        if ($this->isEmailAlreadyRegistered($data['email'])) {
            throw new ApplicationException('EMAIL_ALREADY_REGISTERED', 400) ;
        }

        $userData = [
            ...$data,
            'password' => bcrypt($data['password'])
        ];
        
        $referenceUser = $this->getUserByInviteCode($data['invite_code']);
        $user = new User($userData);
        $user->invited_by = $referenceUser->id;
        $user->role = 'CUSTOMER';
        $user->document = $data['document'];
        $user->birthdate = new DateTime($data['birthdate']);
        $user->invite_code = $this->generateInviteCode();
        $user->save();

        $this->notifyNextUsers($referenceUser, $user->name);

        return $user;
    }

    private function getUserByInviteCode($code)
    {
        $referenceUser = User::query()
            ->where('invite_code', $code)
            ->first();

        if (!$referenceUser) {
            throw new ApplicationException('BAD_INVITE_CODE', 403);
        }

        return $referenceUser;
    }

    private function notifyNextUsers(User $startUser, $lastUserName) {
        for ($i = 0; $i < 3; $i++) {
            if (is_numeric($startUser)) {
                $startUser = User::where('id', $startUser)->first();
            }

            if (!$startUser) continue;

            $log = new CashbackHistory([
                'title' => 'NEW_USER_INVITED_' . $i,
                'message' => $lastUserName,
                'status' => 'CONFIRMED',
                'user_id' => $startUser->id
            ]);
            $log->save();

            $lastUserName = $startUser->name;
            $startUser = $startUser->invited_by;
        }
    }

    private function generateInviteCode() 
    {
        return mb_strtoupper(substr(md5(microtime()),rand(0,26),6));
    }

    private function isEmailAlreadyRegistered($email) 
    {
        return User::query()->where('email', $email)->exists();
    }
}
