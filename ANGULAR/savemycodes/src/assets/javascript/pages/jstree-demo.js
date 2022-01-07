var file_types = {
  '#': {
    max_children: 1,
    max_depth: 4,
    valid_children: ['root']
  },
  'root': {
    icon: 'fa fa-hdd text-yellow',
    valid_children: ['default', 'file']
  },
  default: {
    icon: 'fa fa-folder text-yellow',
    valid_children: ['default', 'file']
  },
  file: {
    icon: 'fa fa-file',
    valid_children: []
  },
  text: {
    icon: 'far fa-file-alt',
    valid_children: []
  },
  word: {
    icon: 'far fa-file-word',
    valid_children: []
  },
  excel: {
    icon: 'far fa-file-excel',
    valid_children: []
  },
  ppt: {
    icon: 'far fa-file-powerpoint',
    valid_children: []
  },
  pdf: {
    icon: 'far fa-file-pdf',
    valid_children: []
  },
  archive: {
    icon: 'far fa-file-archive',
    valid_children: []
  },
  image: {
    icon: 'far fa-file-image',
    valid_children: []
  },
  audio: {
    icon: 'far fa-file-audio',
    valid_children: []
  },
  video: {
    icon: 'far fa-file-video',
    valid_children: []
  }
};

$(document).on('theme:init', function () {
  $('#jstree').on('changed.jstree', function (e, data) {
    console.log('The selected id is: ' + data.selected);
  })
  .jstree({
    plugins: ['types', 'contextmenu','dnd','wholerow'],
    core: {
      data: {
        url: $('#jstree').data('url'),
        data: function data(node) {
          return {
            id: node.id
          };
        }
      },
      check_callback: true
    },
    types: file_types
  }); // jstree7 - dnd
});