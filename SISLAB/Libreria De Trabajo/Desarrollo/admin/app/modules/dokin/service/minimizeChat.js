angular.module('dokin').service('minimizeChat', function() {
    this.list = [];
    this.map = {};
    this.add = function(client) {
        if (!this.map[client.id]) {
            this.list.push(client);
            this.map[client.id] = client;
        } else {
            this.map[client.id] = client;
        }
    }
		this.conversations={};
		this.getConversation=function(id){
			if(this.conversations[id])return this.conversations[id];
			else {
				return false;
			}
		}
		this.addMessageToConversation=function(message){
			var thread=this.conversations[message.visitorId];
			thread.push(message);
		}
		this.cacheConversation=function(chat){
			this.conversations[chat.visitorId]=chat.thread;
		}
});
