<?php

namespace App\Http\Requests;

use App\Models\Category;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule as ValidationRule;

class StoreImagePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $categories = Category::all()->pluck('name');
        return [
            'description' => 'max:50',
            'country' => 'required|min:3|max:50',
            'city' => 'required|min:3|max:50',
            'tags' => 'required|array',
            'category' => ['required', ValidationRule::in($categories)],
            'image' => 'required|image|mimes:jpg,jpeg|min:512',
        ];
    }
    // |max:2048
    // public function messages()
    // {
    // return ['description.min' => ''];
    // }
}
