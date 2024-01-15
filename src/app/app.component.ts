import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { ClawsComponent } from './claws/claws.component';
import { TorsoComponent } from './torso/torso.component';
import { PawsComponent } from './paws/paws.component';
import { GrifooComponent } from './grifoo/grifoo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent, ClawsComponent, TorsoComponent, PawsComponent, GrifooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grifo';
}
