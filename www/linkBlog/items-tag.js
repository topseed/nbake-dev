
riot.tag2('items-tag', '<virtual each="{items}"> <h3>{title}</h3> <div>{content_text}</div></virtual> <p></p> <p></p>', '', '', function(opts) {
    console.log('items tag')
    this.items = []

     this.renderItems = function(args) {
    	console.log('first row '+ JSON.stringify(args[0]))
    	this.items = args
    	this.update()
    }.bind(this)
});