<?php

namespace App\Http\Controllers;

use App\Http\Requests\InquiryRequest;
use App\Http\Resources\InquiryResource;
use App\Models\Inquiry;
use App\Notifications\InquiryStored;
use Illuminate\Support\Facades\Notification;

class InquiryController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return InquiryResource|\Illuminate\Http\Response
     */
    public function store(InquiryRequest $request)
    {
        $inquiry = Inquiry::create($request->validated());

        Notification::route('mail', 'test@gmail.com')
        ->notify(new InquiryStored());

        return new InquiryResource($inquiry);
    }
}
