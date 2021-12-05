import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user: any) {
    console.log("favourite", user);
    this.ionList.closeSlidingItems()
  }

  share(user:any) {
    console.log("share", user);
    this.ionList.closeSlidingItems()
  }

  delete(user: any) {
    console.log("delete", user)
    this.ionList.closeSlidingItems()
  }

}
