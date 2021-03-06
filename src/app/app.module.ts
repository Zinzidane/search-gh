import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersService } from './users.service';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatButtonModule,
	FormsModule,
	HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
