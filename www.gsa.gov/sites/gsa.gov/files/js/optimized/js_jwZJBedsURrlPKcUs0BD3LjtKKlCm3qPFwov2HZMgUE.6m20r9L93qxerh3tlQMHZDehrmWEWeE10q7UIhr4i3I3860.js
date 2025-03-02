/**
 * @file
 * CKEditor Tables init for public facing
 *
 */

const table_stacked = () => {
  let tables = document.querySelectorAll('.usa-table--stacked');

  tables.forEach(table => {
    let tableHeaders = table.querySelectorAll('th'),
        tableRows = table.querySelectorAll('tr'),
        tableBody = table.querySelectorAll('tbody'),
        headerText = [];

    for (let b = 0, body; body = tableBody[b]; b++) {
      for (let r = 0, row; row = body.rows[r]; r++) {
        for (let c = 0, col; col = row.cells[c]; c++) {
          for (let i = 0; i < tableHeaders.length; i++) {
            let current = tableHeaders[i];
            headerText.push(current.textContent.replace(/\r?\n|\r/, ""));
            col.setAttribute("data-label", headerText[c]);
          }
        }
      }
    }
  })
}

const dataTables_init = () => {
  // Directives All
  var optsFromUrl = $.fn.dataTable.ext.deepLink( [
    'search.search', 'order'
  ] );
  var optsDefaultOrder = optsFromUrl;

  if(optsDefaultOrder.order == undefined){
    optsDefaultOrder.order = [[0, 'asc']];
  }

  // Directives Tables
  $('.path-directives-library table.views-table').dataTable({
    "paging": true,
    "ordering": true,
    "order": optsDefaultOrder.order,
    "info": true,
    "searching": true,
    "search": optsFromUrl.search,
    'pageLength': 10,
    'lengthMenu': [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
    "language": {
      search: "<span class=\"usa-sr-only\">Search this table</span>",
      searchPlaceholder: "Search"
    },
  });


  // GSA Forms Library
  $('.view-forms table').dataTable({
    "order": optsDefaultOrder.order,
    "paging": true,
    "ordering": true,
    "dom": 'rtip',
    'pageLength': 10,
    "autoWidth": true,
  });

  $('table.sortTable').dataTable({
    "paging": false,
    "ordering": true,
    "order": optsFromUrl.order,
    "info": false,
    "searching": false
  });

  $('.view-id-directive_versions.view-display-id-block_3 table').dataTable({
    "paging": true,
    "ordering": true,
    "order" : optsFromUrl.order,
    'pageLength': 10,
    "autoWidth": true,
    "searching": true,
    "search": optsFromUrl.search,
    columnDefs: [
      {
        target: 5,
        visible: false,
        searchable: false,
      }
    ],
    "language": {
      search: "<span class=\"usa-sr-only\">Search this table</span>",
      searchPlaceholder: "Search"
    }
  });
}

setTimeout(function() {
  $('table.scrollTable').dataTable({
    "scrollY": "400px",
    "paging": false,
    "scrollCollapse": true,
    "ordering": false,
    "info": false,
    "searching": false,
    "autoWidth": true,
  });

  var optsFromUrl = $.fn.dataTable.ext.deepLink( [
    'search.search', 'order'
  ] );
  $('table.scrollTable_search').dataTable({
    "scrollY": "400px",
    "paging": false,
    "scrollCollapse": true,
    "ordering": true,
    "order" : optsFromUrl.order,
    "autoWidth": true,
    "search" : optsFromUrl.search,
    'language': {
      search: "<span class=\"usa-sr-only\">Search this table</span>",
      searchPlaceholder: "Filter results"
    },
  });
  setTimeout(function() {
    // Find all divs with class .dataTables_scrollHeadInner
    let scrollHeadInnerDivs = document.querySelectorAll('.dataTables_scrollHeadInner');
    // Loop through each div
    scrollHeadInnerDivs.forEach(function(scrollHeadInnerDiv) {
      // Add aria-hidden attribute
      if (scrollHeadInnerDiv) {
        scrollHeadInnerDiv.setAttribute('aria-hidden', 'true');
      }
      let thCells = scrollHeadInnerDiv.querySelectorAll('th');
      // Remove tabindex from all th tags
      thCells.forEach(function(th) {
        th.removeAttribute('tabindex');
      });
    });
  }, 400)
}, 400)

dataTables_init();
table_stacked();

