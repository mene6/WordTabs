<?php 

namespace App\Http\Controllers;

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        return Role::all();  // Get all roles
    }

    public function getUserRoles($id)
    {
        $user = User::findOrFail($id);
        return $user->roles;  // Return roles for the user
    }

    public function updateUserRole(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $role = Role::where('name', $request->input('role'))->firstOrFail();
        
        $user->syncRoles([$role->name]);  // Assign new role
        
        return response()->json(['message' => 'Role updated successfully']);
    }
}
