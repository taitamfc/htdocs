import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;
import 'jstree';

@Component({
  selector: 'app-files',
  templateUrl: './../templates/files.component.html',
})
export class FilesComponent implements OnInit {
  jsonUrl = 'assets/data/jstree3.json';
  selected_files: String[] = [];
  codemirror_content = 'this is a test';
  codemirror_options = {
    lineNumbers: true,
    theme: 'material',
    mode: 'css'
  };
  constructor() {

  }

  ngOnInit() {
    console.log( this.codemirror_options );
    console.log( this.codemirror_content );
    $(function () {
      let file_types = {
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
          icon: 'fa fa-file can-open',
          valid_children: []
        },
        text: {
          icon: 'far fa-file-alt can-open',
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
          icon: 'far fa-file-powerpoint ',
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
      $('#jstree').jstree({
        plugins: ['types', 'contextmenu', 'dnd', 'wholerow'],
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
    // $('#jstree').on('changed.jstree', function (e, data) {
    //   console.log("get Selected:", data.instance.get_selected(true)[0].text);
    //   console.log("get Selected Node:", data.instance.get_node(data.selected[0]).text);    
    // });
  }

  @HostListener('document:dblclick', ['$event'])
  //handle click tree file
  clickInside(event) {
    //only call click file in tree
    if ($(event.target).hasClass('jstree-anchor')) {
      if ($(event.target).find('i.can-open').length > 0) {
        let id_file = $('.jstree-clicked').attr('id');
        let name_file = $('.jstree-clicked').text();
        name_file = name_file.trim();

        //prevent double file
        if ($.inArray(name_file, this.selected_files) == -1) {
          this.selected_files.push(name_file);
        }
      }
    }
  }

  //handle ctrl + s
  @HostListener('document:keydown', ['$event'])
  onKeyDown($event): void {
    // Detect platform
    if (navigator.platform.match('Mac')) {
      this.handleMacKeyEvents($event);
    }
    else {
      this.handleWindowsKeyEvents($event);
    }
  }

  handleMacKeyEvents($event) {
    let charCode = $event.key;
    if ($event.metaKey && charCode == 's') {
      console.log(' Ctrl + s ')
      $event.preventDefault();
    }
  }

  handleWindowsKeyEvents($event) {
    let charCode = $event.key;
    //console.log(charCode);
    if ($event.ctrlKey && charCode == 's') {

      console.log(' Ctrl + s ')
      // Action on Ctrl + S
      $event.preventDefault();
    }
  }

  //handle file tabs click
  changeContentFile(file) {
    this.codemirror_content = file;
  }
  //handle content change
  handleKeyUp() {
    console.log(this.codemirror_content);
  }

}
