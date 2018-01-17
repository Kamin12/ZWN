
Template.NewMessage.events({
  'click #send2': function (event, template) {
  handleMessageInsert( event, template );
  },
  'click #close4': function (event, template) {
    var modal300 = $('#createnewmessage');
    modal300.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #creategroup': function (event, template) {
    Blaze.render(Template.CreateGroup, createnewmessage )
  },
  'change #fileInput': function(event,template){
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      var upload = Messages.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
  });
