<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class CashbackHistory extends Model
{
    protected $table = 'cashback_history';

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    const STATUS_PENDING = 'PENDING';

    const STATUS_CONFIRMED = 'CONFIRMED';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'value',
        'title',
        'status',
        'message',
        'user_id'
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }

}
