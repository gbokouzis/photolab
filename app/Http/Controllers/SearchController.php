<?php

namespace App\Http\Controllers;

use App\Http\Resources\SearchResource;
use App\Models\Location;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SearchController extends Controller
{
    public function users_search(Request $request)
    {
        $data = User::where('name', 'LIKE', $request->q.'%')->get();
        
        return response()->json($data); 
    }

    public function tags_search(Request $request)
    {
        $data = Tag::where('name', 'LIKE', $request->q.'%')->get();

        return response()->json($data); 
    }

    public function locations_search(Request $request)
    {
        $data = Location::where('country_city', 'LIKE', $request->q.'%')
            ->orWhere('city_country', 'LIKE', $request->q.'%')
            ->get();

        return response()->json($data); 
    }
}
