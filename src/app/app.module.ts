import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavModule } from './nav/nav.module';
import { HandBagsModule } from './hand-bags/hand-bags.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { UsuarioModule } from './usuario/usuario.module';
import { ListarUsuariosModule } from './listar-usuarios/listar-usuarios.module';
import { EditarUsuarioModule } from './editar-usuario/editar-usuario.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavModule,
    HandBagsModule,
    FooterModule,
    MainModule,
    SidenavModule,
    DashboardModule,
    LoginModule,
    UsuarioModule,
    ListarUsuariosModule,
    EditarUsuarioModule,
    provideFirebaseApp(() => initializeApp({"projectId":"market-50b8a","appId":"1:373680944140:web:305a7454a6db6da3a42a29","storageBucket":"market-50b8a.appspot.com","apiKey":"AIzaSyD5uKUXSUeLFbJ0eXj72jhcFVj3DHjLQyY","authDomain":"market-50b8a.firebaseapp.com","messagingSenderId":"373680944140"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
