const { Schema, model } = require('mongoose');
// const  reaction = require('./Reaction') 
const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        max_length: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
},
    username: {
        type: String,
        required: true
},
reaction:[
    {
        type:Schema.Types.ObjectId,
        ref: 'Reaction'
    }
],

    
});

 thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
 }
 );

const Thought = model('thought', thoughtSchema);

module.exports = Thought;