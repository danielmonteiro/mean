import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './auth/logout.component';
import { MessageComponent } from './messages/message.component';
import { MessageInput } from './messages/message-input.component';
import { MessageList } from './messages/message-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { routing } from './app.routing';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        ErrorComponent,
        HeaderComponent,
        LogoutComponent,
        MessageComponent,
        MessageInput,
        MessageList,
        MessagesComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        routing
    ],
    providers: [
        AuthService,
        ErrorService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}