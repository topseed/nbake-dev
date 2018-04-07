
riot.tag2('items-tag', '<p>in tag</p><virtual each="{items}"> <p>{title} {content_text}</p></virtual>', '', '', function(opts) {
    console.log('items tag')
    this.items = []

     this.renderItems = function(args) {
    	console.log('XXX '+ JSON.stringify(args[0]))
    	this.items = args
    	this.update()
    }.bind(this)
});