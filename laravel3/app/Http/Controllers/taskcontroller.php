<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Request;
use App\Http\Requests;

class taskcontroller extends Controller
{

       protected $rules = [
        'member_name' => ['required', 'min:3'],
        'relative' =>['required','min:1'],
        'relation' => ['required','min:1'],
    ];



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

   
    public function addmember()
    {
         $inputs = Request::all();
         $name=$inputs['member_name'];
         $relative=$inputs['relative'];
         $relation=$inputs['relation'];
        $results=DB::table('relation')
            ->insert (['member_name'=>$name,'relative'=>$relative,'relationship'=>$relation]);

        if($results==1) {
            $res = DB::table('relation')
                ->select('*')
                ->where('member_name',$name)
                 ->where('relative',$relative)
                ->get();
            return $res;
        }

       
    
    }


    
    public function showrelation()
    {
        $inputs = Request::all();
         $name=$inputs['member_name'];
         $relative=$inputs['relative'];
         $results=DB::table('relation')
         ->select ('*')
         ->where('member_name',$name)
         ->where('relative',$relative)
         ->get();

         return $results;
    }

     public function getlatest()
    {
        $inputs = Request::all();
         $id=$inputs['id'];
         $results=DB::table('relation')
         ->select ('*')
         ->where('id',$id)
         
         ->get();

         return $results;
    }


   
    public function updaterelation()
    {
        $inputs = Request::all();
        $id=$inputs['id'];
         $name=$inputs['member_name'];
         $relative=$inputs['relative'];
         $relation=$inputs['relation'];
        $results=DB::table('relation')
            ->where('id',$id)
            
            ->update (['member_name'=>$name,'relative'=>$relative,'relationship'=>$relation]);

        if($results==1) {
            $res = DB::table('relation')
                ->select('*')
                ->where('id',$id)
                
                ->get();
            return $res;
        } 
    }

    /**
     
     */
    public function deletemember()
    {
        $inputs = Request::all();
         $id=$inputs['id'];
         $results=DB::table('relation')
          ->where('id',$id)
          ->delete();

         
    }
}
