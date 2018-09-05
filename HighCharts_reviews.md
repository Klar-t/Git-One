#####前几天需要制作一些图表，于是想到去年用过HighChars，就想着反正好久没写过图表了，于是就把活给揽过来了(被硬塞进来的)；顺带复习一下HighChars吧！当然，都是[官方文档](https://www.hcharts.cn/demo/highcharts)上看到的

- HighChars图表由九个部分组成
![Highcharts基本组成部分](http://upload-images.jianshu.io/upload_images/3827288-2d3c5305218a5943.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
1. 标题（Title）
2. 坐标轴（Axis）
3. 数据列（Series）
4. 数据提示框（Tooltip）
5. 图例（Legend）
6. 版权标签（Credits）
7. 导出功能（Exporting）
8. 标示线（PlotLines）
9. 标示区（PlotBands）
```
- 图表类型通过 chart.type 来指定图表类型，表示如果默认图表类型，即如果 series 中没有指定 type， 那么图表的类型就由该属性来确定。
- HighChars使用最主要的是图表配置选项：
```
var options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
};
```

数据列共有三个级别的配置，权重从低到高依次如下：

*   配置在 plotOptions.series 中

对应的 API 为：[plotOptions.series](http://api.hcharts.cn/highcharts#plotOptions.series) 中，针对所有类型图表有效，一般是通用配置。

*   配置在 plotOptions.{图表类型} 中

对应的 API 为 ： [plotOptions](http://api.hcharts.cn/highcharts#plotOptions) 下的指定图表类型，针对当前类型图表有效，一般是某一种图表的通用配置。

*   配置在 series 中

对应的 API 为：[series](http://api.hcharts.cn/highcharts#series)， 针对当前数据列有效

以上三中方式自上往下权重依次递增的，也就是配置在 series 中的属性会覆盖 plotOptions 中的配置。 Highcharts API 的这种层级关系体现了 API 设计的继承性和灵活性。

series：数据列；格式是json对象；
配置好图表配置，一个简单的报表就出来了；
显示报表后需要点击某一个栏会出现下一个报表或者运行一个函数；

下一个报表的话HighChars提供了一个钻取功能：drilldown ；
```
$(function () {
		// Create the chart
		$('#container').highcharts({
				chart: {
						type: 'column',
						events: {
								drillup: function(e) {
										// 上钻回调事件
										console.log(e.seriesOptions);
								},
								drilldown: function (e) {
										if (!e.seriesOptions) {
												var chart = this,
														drilldowns = {
																'Animals': {
																		name: 'Animals',
																		data: [
																				['Cows', 2],
																				['Sheep', 3]
																		]
																}
														},
														series = drilldowns[e.point.name];
												// Show the loading label
												chart.showLoading('Simulating Ajax ...');
												setTimeout(function () {
														chart.hideLoading();
														chart.addSeriesAsDrilldown(e.point, series);
												}, 1000);
										}
								}
						}
				},
				series: [{
						name: 'Things',
						colorByPoint: true,
						data: [{
								name: 'Animals',
								y: 5,
								drilldown: true
						}]
				}]
		});
});

```

运行函数的话：events ;当数据列被点击时触发的事件回调函数，其中事件对象作为函数的参数传递
```
Highcharts.chart('container', {
		xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},
		plotOptions: {
				series: {
						cursor: 'pointer',
						events: {
								click: function (event) {
										alert(
												this.name + ' 被点击了\n' +
												'最近点：' + event.point.category + '\n' +  
												'Alt 键: ' + event.altKey + '\n' +
												'Ctrl 键: ' + event.ctrlKey + '\n' +
												'Meta 键（win 键）： ' + event.metaKey + '\n' +
												'Shift 键：' + event.shiftKey
										);
								}
						}
				}
		},
		series: [{
				data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
		}]
});

```



[highchars 参数配置](https://www.cnblogs.com/LiviaLiu742X/archive/2013/07/22/3205450.html)



