/* shared/shared.module.ts */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@app/modules/shared/components/table/table.component';
/* Angular Material */
import { MaterialModule } from '@app/modules/material/material.module';

@NgModule({
    imports: [ CommonModule, MaterialModule ],
    declarations: [ TableComponent ],
    exports: [ TableComponent ]
})
export class SharedModule { }
