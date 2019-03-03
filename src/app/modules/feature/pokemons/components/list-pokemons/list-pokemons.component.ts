import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/modules/core/services/users.service';
import { User } from '@app/modules/core/models/user.model';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'operator-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {
  private dataSource: User[];
  private displayedColumns: Array<any>;

  constructor (private userService: UsersService) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'email', 'phone', 'company'];
    this.userService.getUsers()
    .pipe(finalize(() => { console.log('observer ends'); }))
    .subscribe(res => {
        this.dataSource = res ;
        console.log('res from pokemon =>', this.dataSource);
      });
  }

}
