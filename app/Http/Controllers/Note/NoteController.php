<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Http\Services\Note\NoteService;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    private NoteService $noteService;

    public function __construct(NoteService $noteService)
    {
        $this->noteService = $noteService;
    }

    public function index()
    {
        
        return  $this->noteService->getUserNotes();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'content' => 'required|string|max:255',
        ]);

        return $this->noteService->createNote($data, $request->user()->id);
    }

    public function update(Request $request, int $id)
    {
      
        $data = $request->validate([
            'content' => 'required|string|max:255',
        ]);
       
        return $this->noteService->updateNote($id, $data);
    }

    public function destroy(int $id)
    {
        return $this->noteService->deleteNote($id);
    }
}
