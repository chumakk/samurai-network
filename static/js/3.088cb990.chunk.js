(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{103:function(e,a,s){e.exports={dialog:"Dialog_dialog__eie9f",active:"Dialog_active__24U9g",avatarWrapper:"Dialog_avatarWrapper__DNlOm",avatar:"Dialog_avatar__35Pr3",infoWrapper:"Dialog_infoWrapper__3mdcf",name:"Dialog_name__1FTRn",timeLastMessage:"Dialog_timeLastMessage__3cHYb",lastMessage:"Dialog_lastMessage__1tOGU",lastMessageFrom:"Dialog_lastMessageFrom__2geDo"}},104:function(e,a,s){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__1LNmM",dialogsTitle:"Dialogs_dialogsTitle__3ZYZf",dialogsItems:"Dialogs_dialogsItems__1mESg",messageSide:"Dialogs_messageSide__fiZ8r",messageContainer:"Dialogs_messageContainer__2BCOv"}},105:function(e,a,s){},106:function(e,a,s){e.exports={inputMessage:"NewMessage_inputMessage__3Ycuf"}},111:function(e,a,s){"use strict";s.r(a);s(1);var t=s(0),i=s(6),c=s(103),n=s.n(c);var r=function(e){var a="/dialogs/"+e.state.id;return Object(t.jsx)("div",{className:n.a.dialog,children:Object(t.jsxs)(i.b,{to:a,activeClassName:n.a.active,children:[Object(t.jsx)("div",{className:n.a.avatarWrapper,children:Object(t.jsx)("img",{alt:"avatar",className:n.a.avatar,src:e.state.avatar})}),Object(t.jsxs)("div",{className:n.a.infoWrapper,children:[Object(t.jsx)("div",{className:n.a.name,children:e.state.name}),Object(t.jsx)("div",{className:n.a.timeLastMessage,children:e.state.timeLastMessage}),Object(t.jsxs)("div",{className:n.a.lastMessage,children:[Object(t.jsx)("span",{className:n.a.lastMessageFrom,children:"You: "}),e.state.lastMessage]})]})]})})},l=s(104),o=s.n(l),g=s(105),d=s.n(g);var m=function(e){return Object(t.jsx)("div",{className:d.a.message,id:e.state.id,children:e.state.message})},j=s(15),_=s(26);s(106);var u=function(e){return Object(t.jsx)(j.b,{onSubmit:function(a){e.createNewMessage(a.message)},children:function(e){return Object(t.jsxs)("form",{onSubmit:function(a){e.handleSubmit(a),e.form.reset()},children:[Object(t.jsx)(j.a,{name:"message",component:_.c,placeholder:"Enter the message"}),Object(t.jsx)("div",{children:Object(t.jsx)("button",{children:"Send"})})]})}})};var b=function(e){var a=e.dialogsPage.dialogs.map((function(e){return Object(t.jsx)(r,{state:e},e.id)})),s=e.dialogsPage.messages.map((function(e){return Object(t.jsx)(m,{state:e},e.id)}));return Object(t.jsxs)("div",{className:o.a.dialogsWrapper,children:[Object(t.jsx)("div",{className:o.a.dialogsTitle,children:"Dialogs"}),Object(t.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(t.jsxs)("div",{className:o.a.messageSide,children:[Object(t.jsx)("div",{className:o.a.messageContainer,children:s}),Object(t.jsx)(u,{createNewMessage:e.createNewMessage})]})]})},p=s(13),v=s(8),O=s(58),f=s(46);a.default=Object(p.d)(f.a,Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{createNewMessage:function(a){e(Object(O.a)(a))}}})))(b)}}]);
//# sourceMappingURL=3.088cb990.chunk.js.map