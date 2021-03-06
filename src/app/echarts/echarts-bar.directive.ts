import { Directive, ElementRef, OnInit } from '@angular/core';
// import { echarts } from 'echarts';
declare var echarts: any;
@Directive({
  selector: '[appEchartsBar]'
})
export class EchartsBarDirective implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {

    const myChart = echarts.init(this.el.nativeElement);
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
}

