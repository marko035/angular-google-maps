import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { InfoWindowManager, MarkerManager } from '@agm/core';
import { ClusterManager } from '../services/managers/cluster-manager';
/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
let AgmMarkerCluster = class AgmMarkerCluster {
    constructor(_clusterManager) {
        this._clusterManager = _clusterManager;
        this.clusterClick = new EventEmitter();
        this.mouseOver = new EventEmitter();
        this.mouseOut = new EventEmitter();
        this._observableSubscriptions = [];
    }
    /** @internal */
    ngOnDestroy() {
        this._clusterManager.clearMarkers();
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
        if (changes['calculator']) {
            this._clusterManager.setCalculator(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
    }
    _addEventListeners() {
        const handlers = [
            {
                name: 'clusterclick',
                handler: (args) => this.clusterClick.emit(args),
            },
            {
                name: 'mouseover',
                handler: (args) => this.mouseOver.emit(args),
            },
            {
                name: 'clustermouseover',
                handler: (args) => this.mouseOver.emit(args),
            },
            {
                name: 'onMouseoverCluster',
                handler: (args) => this.mouseOver.emit(args),
            },
        ];
        handlers.forEach((obj) => {
            const os = this._clusterManager.createClusterEventObservable(obj.name).subscribe(obj.handler);
            this._observableSubscriptions.push(os);
        });
    }
    /** @internal */
    ngOnInit() {
        this._addEventListeners();
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
            calculator: this.calculator,
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], AgmMarkerCluster.prototype, "gridSize", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], AgmMarkerCluster.prototype, "maxZoom", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AgmMarkerCluster.prototype, "zoomOnClick", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AgmMarkerCluster.prototype, "averageCenter", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], AgmMarkerCluster.prototype, "minimumClusterSize", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], AgmMarkerCluster.prototype, "styles", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], AgmMarkerCluster.prototype, "calculator", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AgmMarkerCluster.prototype, "imagePath", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AgmMarkerCluster.prototype, "imageExtension", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], AgmMarkerCluster.prototype, "clusterClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], AgmMarkerCluster.prototype, "mouseOver", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], AgmMarkerCluster.prototype, "mouseOut", void 0);
AgmMarkerCluster = tslib_1.__decorate([
    Directive({
        selector: 'agm-marker-cluster',
        providers: [
            ClusterManager,
            { provide: MarkerManager, useExisting: ClusterManager },
            InfoWindowManager,
        ],
    }),
    tslib_1.__metadata("design:paramtypes", [ClusterManager])
], AgmMarkerCluster);
export { AgmMarkerCluster };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdtL2pzLW1hcmtlci1jbHVzdGVyZXIvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL21hcmtlci1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFNdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBU0gsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUE0QzNCLFlBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUx6QyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2RCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsNkJBQXdCLEdBQW1CLEVBQUUsQ0FBQztJQUNDLENBQUM7SUFFeEQsZ0JBQWdCO0lBQ2hCLFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsV0FBVyxDQUFDLE9BQXdDO1FBQ2xELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFP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QUN6QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBdkhVO0lBQVIsS0FBSyxFQUFFOztrREFBa0I7QUFLakI7SUFBUixLQUFLLEVBQUU7O2lEQUFpQjtBQUtoQjtJQUFSLEtBQUssRUFBRTs7cURBQXNCO0FBS3JCO0lBQVIsS0FBSyxFQUFFOzt1REFBd0I7QUFLdkI7SUFBUixLQUFLLEVBQUU7OzREQUE0QjtBQUszQjtJQUFSLEtBQUssRUFBRTs7Z0RBQXdCO0FBS3ZCO0lBQVIsS0FBSyxFQUFFOztvREFBK0I7QUFFOUI7SUFBUixLQUFLLEVBQUU7O21EQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTs7d0RBQXdCO0FBRXRCO0lBQVQsTUFBTSxFQUFFO3NDQUFlLFlBQVk7c0RBQWdDO0FBQzFEO0lBQVQsTUFBTSxFQUFFO3NDQUFZLFlBQVk7bURBQWdDO0FBQ3ZEO0lBQVQsTUFBTSxFQUFFO3NDQUFXLFlBQVk7a0RBQWdDO0FBekNyRCxnQkFBZ0I7SUFSNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixTQUFTLEVBQUU7WUFDVCxjQUFjO1lBQ2QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUU7WUFDdkQsaUJBQWlCO1NBQ2xCO0tBQ0YsQ0FBQzs2Q0E2Q3FDLGNBQWM7R0E1Q3hDLGdCQUFnQixDQTJINUI7U0EzSFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbmZvV2luZG93TWFuYWdlciwgTWFya2VyTWFuYWdlciB9IGZyb20gJ0BhZ20vY29yZSc7XG5pbXBvcnQgeyBDbHVzdGVyTWFuYWdlciB9IGZyb20gJy4uL3NlcnZpY2VzL21hbmFnZXJzL2NsdXN0ZXItbWFuYWdlcic7XG5cbmltcG9ydCB7IENhbGN1bGF0ZUZ1bmN0aW9uLCBDbHVzdGVyT3B0aW9ucywgQ2x1c3RlclN0eWxlIH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLWNsdXN0ZXJlci10eXBlcyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEFnbU1hcmtlckNsdXN0ZXIgY2x1c3RlcnMgbWFwIG1hcmtlciBpZiB0aGV5IGFyZSBuZWFyIHRvZ2V0aGVyXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogIHNlbGVjdG9yOiAnbXktbWFwLWNtcCcsXG4gKiAgc3R5bGVzOiBbYFxuICogICAgYWdtLW1hcCB7XG4gKiAgICAgIGhlaWdodDogMzAwcHg7XG4gKiAgICB9XG4gKiBgXSxcbiAqICB0ZW1wbGF0ZTogYFxuICogICAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImxhdFwiIFtsb25naXR1ZGVdPVwibG5nXCIgW3pvb21dPVwiem9vbVwiPlxuICogICAgICA8YWdtLW1hcmtlci1jbHVzdGVyPlxuICogICAgICAgIDxhZ20tbWFya2VyIFtsYXRpdHVkZV09XCJsYXRcIiBbbG9uZ2l0dWRlXT1cImxuZ1wiIFtsYWJlbF09XCInTSdcIj5cbiAqICAgICAgICA8L2FnbS1tYXJrZXI+XG4gKiAgICAgICAgPGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdDJcIiBbbG9uZ2l0dWRlXT1cImxuZzJcIiBbbGFiZWxdPVwiJ04nXCI+XG4gKiAgICAgICAgPC9hZ20tbWFya2VyPlxuICogICAgICA8L2FnbS1tYXJrZXItY2x1c3Rlcj5cbiAqICAgIDwvYWdtLW1hcD5cbiAqICBgXG4gKiB9KVxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FnbS1tYXJrZXItY2x1c3RlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIENsdXN0ZXJNYW5hZ2VyLFxuICAgIHsgcHJvdmlkZTogTWFya2VyTWFuYWdlciwgdXNlRXhpc3Rpbmc6IENsdXN0ZXJNYW5hZ2VyIH0sXG4gICAgSW5mb1dpbmRvd01hbmFnZXIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFnbU1hcmtlckNsdXN0ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBDbHVzdGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgZ3JpZCBzaXplIG9mIGEgY2x1c3RlciBpbiBwaXhlbHNcbiAgICovXG4gIEBJbnB1dCgpIGdyaWRTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHpvb20gbGV2ZWwgdGhhdCBhIG1hcmtlciBjYW4gYmUgcGFydCBvZiBhIGNsdXN0ZXIuXG4gICAqL1xuICBASW5wdXQoKSBtYXhab29tOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIG9mIGNsaWNraW5nIG9uIGEgY2x1c3RlciBpcyB0byB6b29tIGludG8gaXQuXG4gICAqL1xuICBASW5wdXQoKSB6b29tT25DbGljazogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2VudGVyIG9mIGVhY2ggY2x1c3RlciBzaG91bGQgYmUgdGhlIGF2ZXJhZ2Ugb2YgYWxsIG1hcmtlcnMgaW4gdGhlIGNsdXN0ZXIuXG4gICAqL1xuICBASW5wdXQoKSBhdmVyYWdlQ2VudGVyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgbWFya2VycyB0byBiZSBpbiBhIGNsdXN0ZXIgYmVmb3JlIHRoZSBtYXJrZXJzIGFyZSBoaWRkZW4gYW5kIGEgY291bnQgaXMgc2hvd24uXG4gICAqL1xuICBASW5wdXQoKSBtaW5pbXVtQ2x1c3RlclNpemU6IG51bWJlcjtcblxuICAvKipcbiAgICogQW4gb2JqZWN0IHRoYXQgaGFzIHN0eWxlIHByb3BlcnRpZXMuXG4gICAqL1xuICBASW5wdXQoKSBzdHlsZXM6IENsdXN0ZXJTdHlsZVtdO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlcyB0aGUgY2x1c3RlciBzdHlsZSBhbmQgdGV4dCBiYXNlZCBvbiB0aGUgbWFya2VycyBpbiB0aGUgY2x1c3Rlci5cbiAgICovXG4gIEBJbnB1dCgpIGNhbGN1bGF0b3I6IENhbGN1bGF0ZUZ1bmN0aW9uO1xuXG4gIEBJbnB1dCgpIGltYWdlUGF0aDogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZUV4dGVuc2lvbjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBjbHVzdGVyQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZU92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBtb3VzZU91dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIF9vYnNlcnZhYmxlU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2x1c3Rlck1hbmFnZXI6IENsdXN0ZXJNYW5hZ2VyKSB7IH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLmNsZWFyTWFya2VycygpO1xuICAgIHRoaXMuX29ic2VydmFibGVTdWJzY3JpcHRpb25zLmZvckVhY2goKHMpID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBpZiAoY2hhbmdlc1snZ3JpZFNpemUnXSkge1xuICAgICAgdGhpcy5fY2x1c3Rlck1hbmFnZXIuc2V0R3JpZFNpemUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydtYXhab29tJ10pIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLnNldE1heFpvb20odGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWyd6b29tT25DbGljayddKSB7XG4gICAgICB0aGlzLl9jbHVzdGVyTWFuYWdlci5zZXRab29tT25DbGljayh0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2F2ZXJhZ2VDZW50ZXInXSkge1xuICAgICAgdGhpcy5fY2x1c3Rlck1hbmFnZXIuc2V0QXZlcmFnZUNlbnRlcih0aGlzKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ21pbmltdW1DbHVzdGVyU2l6ZSddKSB7XG4gICAgICB0aGlzLl9jbHVzdGVyTWFuYWdlci5zZXRNaW5pbXVtQ2x1c3RlclNpemUodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydpbWFnZVBhdGgnXSkge1xuICAgICAgdGhpcy5fY2x1c3Rlck1hbmFnZXIuc2V0SW1hZ2VQYXRoKHRoaXMpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snaW1hZ2VFeHRlbnNpb24nXSkge1xuICAgICAgdGhpcy5fY2x1c3Rlck1hbmFnZXIuc2V0SW1hZ2VFeHRlbnNpb24odGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydjYWxjdWxhdG9yJ10pIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLnNldENhbGN1bGF0b3IodGhpcyk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydzdHlsZXMnXSkge1xuICAgICAgdGhpcy5fY2x1c3Rlck1hbmFnZXIuc2V0U3R5bGVzKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnY2x1c3RlcmNsaWNrJyxcbiAgICAgICAgaGFuZGxlcjogKGFyZ3M6IGFueSkgPT4gdGhpcy5jbHVzdGVyQ2xpY2suZW1pdChhcmdzKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdtb3VzZW92ZXInLFxuICAgICAgICBoYW5kbGVyOiAoYXJnczogYW55KSA9PiB0aGlzLm1vdXNlT3Zlci5lbWl0KGFyZ3MpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NsdXN0ZXJtb3VzZW92ZXInLFxuICAgICAgICBoYW5kbGVyOiAoYXJnczogYW55KSA9PiB0aGlzLm1vdXNlT3Zlci5lbWl0KGFyZ3MpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29uTW91c2VvdmVyQ2x1c3RlcicsXG4gICAgICAgIGhhbmRsZXI6IChhcmdzOiBhbnkpID0+IHRoaXMubW91c2VPdmVyLmVtaXQoYXJncyksXG4gICAgICB9LFxuICAgIF07XG4gICAgaGFuZGxlcnMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBjb25zdCBvcyA9IHRoaXMuX2NsdXN0ZXJNYW5hZ2VyLmNyZWF0ZUNsdXN0ZXJFdmVudE9ic2VydmFibGUob2JqLm5hbWUpLnN1YnNjcmliZShvYmouaGFuZGxlcik7XG4gICAgICB0aGlzLl9vYnNlcnZhYmxlU3Vic2NyaXB0aW9ucy5wdXNoKG9zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9jbHVzdGVyTWFuYWdlci5pbml0KHtcbiAgICAgIGdyaWRTaXplOiB0aGlzLmdyaWRTaXplLFxuICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgem9vbU9uQ2xpY2s6IHRoaXMuem9vbU9uQ2xpY2ssXG4gICAgICBhdmVyYWdlQ2VudGVyOiB0aGlzLmF2ZXJhZ2VDZW50ZXIsXG4gICAgICBtaW5pbXVtQ2x1c3RlclNpemU6IHRoaXMubWluaW11bUNsdXN0ZXJTaXplLFxuICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICAgIGltYWdlUGF0aDogdGhpcy5pbWFnZVBhdGgsXG4gICAgICBpbWFnZUV4dGVuc2lvbjogdGhpcy5pbWFnZUV4dGVuc2lvbixcbiAgICAgIGNhbGN1bGF0b3I6IHRoaXMuY2FsY3VsYXRvcixcbiAgICB9KTtcbiAgfVxufVxuIl19