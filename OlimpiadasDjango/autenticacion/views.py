from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from administracion import models


# Vista SignUp

def signup(request):
    if request.method == 'GET':
        return render(request, 'signup.html',{
            'form' : UserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']: # Compara que las contraseñas establecidas sean iguales.
            try:
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'])
                nueva_perfil = models.Perfil(user = user)
                nueva_perfil.save()
                user.save()
                return redirect('/signin/')
            except:
                
                return render(request, 'signup.html',{
                    'form' : UserCreationForm,
                    'error': 'Usuario existente'
                })
        else:
            return render(request, 'signup.html',{
                'form' : UserCreationForm,
                'error': 'Las contraseñas no coinciden'
            })

# Vista si el usuario esta logeado.

@login_required
def signout(request):
    logout(request)
    return redirect('/')

# Vista SignIn

def signin(request):
    if request.method == 'GET':

        return render(request, 'signin.html',{
            'form': AuthenticationForm
        })
    else:
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:

            return render(request, 'signin.html',{
                'form': AuthenticationForm,
                'error': "El usuario o contraseña es incorrecto"
            })
        else:
            login(request, user)
            return redirect('/')