
	window._skel_config = {
		prefix: 'css/style',
		preloadStyleSheets: true,
		resetCSS: false,
		boxModel: 'border',
		grid: { gutters: 30 },
		breakpoints: {
			wide: { range: '1200-', containers: 1200, grid: { gutters: 50 } },
			narrow: { range: '481-1100', containers: 960 },
			narrower: { range: '481-960', containers: 'fluid' },
			mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true, gutters: 20 } }
		}
	};

	window._skel_panels_config = {
		panels: {
			leftPanel: {
				breakpoints: 'mobile,narrower,narrow',
				position: 'left',
				size: 250,
				html: '<div data-action="moveCell" data-args="top-nav,content-block,top-links"></div>'
			}
		},
		overlays: {
			titleBar: {
				breakpoints: 'mobile,narrower,narrow',
				position: 'top-center',
				width: '100%',
				height: 44,
				html: '<div data-action="copyHTML" data-args="title"></div>'
			},
			leftPanelButton: {
				breakpoints: 'mobile,narrower,narrow',
				position: 'top-left',
				width: 80,
				height: 60,
				html: '<div class="toggle fa fa-bars fa-2x" data-action="togglePanel" data-args="leftPanel"></div>'
			}
		}
	};

	$(function () {
		var $container = $('.responsive-grid');
		$container.packery({
		  itemSelector: '.item',
		  gutter: 0
		});

		$('.left-nav a').each(function(){
			if( $(this).hasClass('active') ){
				$(this).append('<i class="fa fa-chevron-right"></i>');
			}
		});
	});