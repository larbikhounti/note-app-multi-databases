<?php

namespace App\Http\Services\Note;

use App\Models\Note;
use Symfony\Component\HttpFoundation\Response;

class NoteService
{
    public function getUserNotes()
    {
        return response()->json(Note::all());
    }

    public function createNote(array $data, int $userId)
    {
        $note =  Note::create([
            'content' => $data['content'],
            'user_id' => $userId
        ]);
        return response()->json($note, Response::HTTP_CREATED);
    }

    public function updateNote(int $id, array $data)
    {
        $note = Note::find($id);
        if (!$note) {
            return response()->json(['message' => 'Note not found'], Response::HTTP_NOT_FOUND);
        }
        $note->update($data);

        return response()->json($note);
    }

    public function deleteNote(int $id)
    {
        $note = Note::find($id);
        if (!$note) {
            return response()->json(['message' => 'Note not found'], Response::HTTP_NOT_FOUND);
        }
        if (!$note->delete()) {
            return response()->json(['message' => 'Failed to delete note'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response()->json(['message' => 'Note deleted successfully'], Response::HTTP_OK);
    }
}
