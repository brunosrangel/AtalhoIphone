import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atalho-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './atalho-form.component.html',
  styleUrls: ['./atalho-form.component.css']
})
export class AtalhoFormComponent {
  playlistUrl: string = '';
  deviceName: string = '';

  gerarAtalho() {
    if (!this.playlistUrl || !this.deviceName) {
      alert('Por favor preencha todos os campos.');
      return;
    }

    const json = JSON.stringify({
      WFWorkflowActions: [
        {
          WFWorkflowActionIdentifier: 'is.workflow.actions.openurls',
          WFWorkflowActionParameters: { WFURL: this.playlistUrl }
        },
        {
          WFWorkflowActionIdentifier: 'is.workflow.actions.setaudiooutput',
          WFWorkflowActionParameters: { WFOutputDeviceName: this.deviceName }
        }
      ],
      WFWorkflowClientRelease: '2.0',
      WFWorkflowName: 'Tocar Playlist Customizada',
      WFWorkflowIcon: {
        WFIconGlyphNumber: 58502,
        WFIconStartColor: 6
      }
    }, null, 2);

    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'TocarPlaylist.shortcut';
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
