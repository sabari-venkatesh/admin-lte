$(document).ajaxStart(function () {
	Pace.restart();
});
$('.ajaxlink').click(function () {
	$.ajax({
		url: '#',
		success: function (result) {
			$('html').html(result);
		}
	});
	return false;
});

$(document).ready(function () {
	$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
		checkboxClass: 'icheckbox_minimal-blue',
		radioClass: 'iradio_minimal-blue'
	});

	var tagLaterHTML = '<form class="form-horizontal">';
	tagLaterHTML += '<div class="form-group">';
	tagLaterHTML += '<label class="col-sm-6 control-label">';
	tagLaterHTML += 'Save for Date';
	tagLaterHTML += '</label>';
	tagLaterHTML += '<div class="col-sm-6">';
	tagLaterHTML += '<input type="text" class="form-control" id="drp">';
	tagLaterHTML += '</div>';
	tagLaterHTML += '</div>';

	tagLaterHTML += '<div class="form-group">';
	tagLaterHTML += '<label class="col-sm-6 control-label">';
	tagLaterHTML += 'Add Label';
	tagLaterHTML += '</label>';
	tagLaterHTML += '<div class="col-sm-6">';
	tagLaterHTML += '<input type="text" class="form-control">';
	tagLaterHTML += '</div>';
	tagLaterHTML += '</div>';


	tagLaterHTML += '<div class="form-group">';
	tagLaterHTML += '<label class="col-sm-6 control-label">';
	tagLaterHTML += 'Public Tag';
	tagLaterHTML += '</label>';
	tagLaterHTML += '<div class="col-sm-6">';
	tagLaterHTML += '<label><input type="checkbox" class="minimal" checked>Yes</label>';
	tagLaterHTML += '</div>';
	tagLaterHTML += '</div>';

	tagLaterHTML += '<div class="form-group">';
	tagLaterHTML += '<div class="col-sm-offset-4 col-sm-8">';
	tagLaterHTML += '<button class="btn btn-primary">Tag it for Later</button>';
	tagLaterHTML += '</div>';
	tagLaterHTML += '</div>';
	tagLaterHTML += '<div class="form-group">';
	tagLaterHTML += '<div class="col-sm-offset-4 col-sm-8">';
	tagLaterHTML += '<button class="btn btn-secondary">Request Download</button>';
	tagLaterHTML += '</div>';
	tagLaterHTML += '</div>';

	tagLaterHTML += '</div></form>';

	$('.btn-popover').popover({
		title: "Tag Episode",
		html: true,
		container: "body",
		placement: "left",
		content: tagLaterHTML,
		trigger: "click"
	});

	$('.slider').slider();
	$('#feeds, #drp, #advisory').daterangepicker();
	$('#search-results').DataTable({
		"paging": true,
		"lengthChange": true,
		"searching": true,
		"ordering": true,
		"info": true,
		"autoWidth": true
	});

	$('.table-search-i').DataTable({
		"columnDefs": [],
		"scrollY": "200px",
		"scrollCollapse": true,
		"scrollX": true,
		initComplete: function () {
			this.api().columns().every(function () {
				var column = this;

				$('input, select', column.header()).on('keyup change', function () {
					var val = $.fn.dataTable.util.escapeRegex(
						$(this).val()
					);
					//					column.search(val ? '^' + val + '$' : '', true, true).draw();
					column.search(val).draw();
				});

				$('input, select', column.header()).on('click focus', function (e) {
					e.stopPropagation();
				})
			});
		}
	});
	/*searchTable.columns().every(function () {
		var that = this;

		$('input', this.header()).on('keyup change', function () {
			if (that.search() !== this.value) {
				that.search(this.value).draw();
			}
		});
	})*/
});
