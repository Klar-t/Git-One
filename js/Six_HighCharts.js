var d= [{name: 'Point 1',id:'s',y: 100
		}, {name: 'Point 2',y: 100
		   }, {name: 'yelont',y: 100
			  }, {name: 'Point 2',y: 100
				 }, {name: 'yelont',y: 100
					}, {name: 'Point 2',y: 100
					   }, {name: 'yelont',y: 100
						  }, {name: 'Point 2',y: 80
							 }, {name: 'yelont',y: 50
								}, {name: 'Point 2',y: 30
								   }, {name: 'yelont',y: 60}
	   ];
$(function () {
	$('#2').highcharts({
		chart: {
			type: 'column'
		},
		xAxis: {
			categories: ['Green', 'Pink']
		},
		plotOptions: {
			column: {
				events:{
					click: function(e) {
						alert(e.point.name);		
					}
				}
			}
		},
		series: [{
			name: '人员',
			type: 'column',
			data:d,
			zones: [{
				value: 0,
				color: '#f7a35c',
				dashStyle: 'dot'
			}, {
				value: 100,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		},{
			name: '目标值',
			type: 'spline',
			data: [100,100,100,100,100,100,100,100,100,100,100],
			zoneAxis: 'y',
			zones:[{value:50,color:'#9400D3'}, {
				value: 80,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		},{
			name: '不知道名字',
			type: 'spline',
			data: [100,10,50,100,80,100,90,100,80,40,70],
			zoneAxis: 'y',
			zones:[{value:50,color:'#9400D3'}, {
				value: 80,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		}],drilldown:{
		}
	});
});
$(function () {
	$('#3').highcharts({
		chart: {
			type: 'column'
		},
		xAxis: {
			categories: ['Green', 'Pink']
		},
		plotOptions: {
			column: {
				events:{
					click: function(e) {
						alert(e.point.name);		
					}
				}
			}
		},
		series: [{
			name: '人员',
			type: 'column',
			data:d,
			zones: [{
				value: 0,
				color: '#f7a35c',
				dashStyle: 'dot'
			}, {
				value: 100,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		},{
			name: '目标值',
			type: 'spline',
			data: [100,100,100,100,100,100,100,100,100,100,100],
			zoneAxis: 'y',
			zones:[{value:50,color:'#9400D3'}, {
				value: 80,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		},{
			name: '不知道名字',
			type: 'spline',
			data: [100,10,50,100,80,100,90,100,80,40,70],
			zoneAxis: 'y',
			zones:[{value:50,color:'#9400D3'}, {
				value: 80,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		}],drilldown:{
		}
	});
});
$(function () {
	$('#4').highcharts({
		chart: {
			type: 'column'
		},
		xAxis: {
			categories: ['Green', 'Pink']
		},
		plotOptions: {
			column: {
				events:{
					click: function(e) {
						alert(e.point.name);		
					}
				}
			}
		},
		series: [{
			name: '人员',
			type: 'column',
			data:d,
			zones: [{
				value: 0,
				color: '#f7a35c',
				dashStyle: 'dot'
			}, {
				value: 100,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		},{
			name: '目标值',
			type: 'spline',
			data: [100,100,100,100,100,100,100,100,100,100,100],
			zoneAxis: 'y',
			zones:[{value:50,color:'#9400D3'}, {
				value: 80,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		},{
			name: '不知道名字',
			type: 'spline',
			data: [100,10,50,100,80,100,90,100,80,40,70],
			zoneAxis: 'y',
			zones:[{value:50,color:'#9400D3'}, {
				value: 80,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		}],drilldown:{
		}
	});
});
$(function () {
	$('#5').highcharts({
		chart: {
			type: 'column'
		},
		xAxis: {
			categories: ['Green', 'Pink']
		},
		plotOptions: {
			column: {
				events:{
					click: function(e) {
						one(e);		
					}
				}
			}
		},
		series: [{
			name: '人员',
			type: 'column',
			data:d,
			zones: [{
				value: 0,
				color: '#f7a35c',
				dashStyle: 'dot'
			}, {
				value: 100,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		},{
			name: '目标值',
			type: 'spline',
			data: [100,100,100,100,100,100,100,100,100,100,100],
			zoneAxis: 'y',
			zones:[{value:50,color:'#9400D3'}, {
				value: 80,
				color: '#DC143C'
			},{
				color: '#90ed7d'
			}]
		}],drilldown:{
		}
	});
});