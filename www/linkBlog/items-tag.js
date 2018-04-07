
riot.tag2('items-tag', '<div class="ui cards"><virtual each="{items}"> <div class="card"> <image><img riot-src="{image}" width="160"></image> <div class="content"> <div class="header">{title}</div> <div class="meta">{author}</div> <div class="description">{content_text}</div> </div> </div></virtual> </div> <p></p> <p></p>', '', '', function(opts) {
    console.log('items tag')
    this.items = []

     this.renderItems = function(args) {
    	console.log('first row '+ JSON.stringify(args[0]))
    	this.items = args
    	this.update()
    }.bind(this)
});