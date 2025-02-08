<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use \Exception as Exception;

class UserController extends Controller {
    // Listar todos os usuários 
    public function index() {
        $users = User::all();
        return response()->json($users);
    }

    // Criar um novo usuário
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return response()->json($user, 201);
    }

    // Mostrar um único usuário
    public function show($id) {
        $user = User::findOrFail($id);
        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }
        return response()->json($user);
    }

    // Atualizar um usuário
    public function update(Request $request, $id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $id,
            'password' => 'sometimes|min:6',
        ]);

        $user->update([
            'name' => $validated['name'] ?? $user->name,
            'email' => $validated['email'] ?? $user->email,
            'password' => isset($validated['password']) ? Hash::make($validated['password']) : $user->password,
        ]);

        return response()->json($user);
    }

    // Deletar um usuário
    public function destroy($id) {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'Usuário deletado com sucesso']);
    }

    public function login(Request $id, $validated){
        $userEmail = User::find($id)->email(); // pega o email do usuario 
        $userPass = User::find($id)->password();// pega a senha do usuario 

        $validated = $request->validate([ // recebe os dados do frontend e verifica se são validos
            'email' => 'required|email',
            'password' => 'required',
        ]);
        try {
         // compara se a senha e o email 
        if($userEmail == $validated['email'] && $userPass == $validated['password']){ 
            return response()->json(['message' => 'Usuário logado com sucesso']);
        }
        } catch (Exception $e) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }
   }
}