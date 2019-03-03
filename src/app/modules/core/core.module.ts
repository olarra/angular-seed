/* core/core.module.ts */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@app/modules/core/components/navbar/navbar.component';
/* Angular Material */
import { MaterialModule } from '@app/modules/material/material.module';
/* Services */
import { UsersService } from '@app/modules/core/services/users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 imports: [ CommonModule, MaterialModule, HttpClientModule],
 declarations: [ NavbarComponent ],
 exports: [ NavbarComponent, HttpClientModule ],
 providers: [ UsersService ]
})
export class CoreModule { }
