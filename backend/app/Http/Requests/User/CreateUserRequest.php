<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'min:8', 'max:200'],
            'email' => ['required', 'email'],
            'password' => ['required', 'min:6'],
            'phone' => ['required', 'max:20'],
            'document' => ['required'],
            'birthdate' => ['required', Rule::date()->beforeToday()],
            'invite_code' => ['required', 'min: 6', 'max: 6']
        ];
    }
}
