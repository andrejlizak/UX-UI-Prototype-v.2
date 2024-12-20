import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detector',
  standalone: true,
  imports: [DxButtonModule, CommonModule],
  templateUrl: './detector.component.html',
  styleUrl: './detector.component.scss'
})
export class DetectorComponent {
  detectionProgress = false;
  uploadProgress = false;
  uploadText = "Uploading...";
  detectionText = "Detection in progress..."
  uploaded = false;
  detected = false;

  isActive = true;

  loadingProgress = 0;
  detectionLoadProgress = 0;

  upload(){
    this.uploadProgress = false;
    this.startLoading();
  }

  exportToXlsx() {
    this.toast.success('Successfully exported!', 'Export');
  }

  startLoading() {
    this.loadingProgress = 0;
    this.uploadProgress = true;
    const interval = setInterval(() => {
      this.loadingProgress += 10;

      if (this.loadingProgress >= 100) {
        this.uploaded = true;
        this.uploadText = 'Upload complete!';
        clearInterval(interval);
      }
    }, 300);
    setTimeout(() => {

    }, 3000)
  }

  startDetection() {
    this.detectionLoadProgress = 0;
    this.detectionProgress = true;
    const interval = setInterval(() => {
      this.detectionLoadProgress += 10;

      if (this.detectionLoadProgress >= 100) {
        this.detected = true;
        this.detectionText = 'Detection complete!';
        clearInterval(interval);
      }
    }, 300);
    setTimeout(() => {

    }, 3000)
  }

  reset(){
    this.uploaded = false;
    this.uploadProgress = false;
    this.loadingProgress = 0;
    this.uploadText = "Uploading...";
  }

  toggleActive(){
    this.isActive = !this.isActive;
  }

  constructor(private toast: ToastrService){}
}
