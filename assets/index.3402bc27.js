import{u as X,a as Y,U as Z}from"./posts-store.ae336a9e.js";import{o,b as c,K as f,q as a,D as r,z as _,A as $,F as C,m as M,t as g,L as b,d as m,T as H,s as N,M as O,a as v,f as I,_ as D,x as K,y as R,e as h,r as V,c as k,u as T,N as x,R as ee,i as te,v as se}from"./index.2b38842c.js";import{d as U,a as j,_ as ie,b as le}from"./toast.1b9a566e.js";function E(e){return e===0?!1:Array.isArray(e)&&e.length===0?!0:!e}function ne(e){return(...t)=>!e(...t)}function ae(e,t){return e===void 0&&(e="undefined"),e===null&&(e="null"),e===!1&&(e="false"),e.toString().toLowerCase().indexOf(t.trim())!==-1}function z(e,t,s,l){return t?e.filter(u=>ae(l(u,s),t)).sort((u,n)=>l(u,s).length-l(n,s).length):e}function oe(e){return e.filter(t=>!t.$isLabel)}function A(e,t){return s=>s.reduce((l,u)=>u[e]&&u[e].length?(l.push({$groupLabel:u[t],$isLabel:!0}),l.concat(u[e])):l,[])}function re(e,t,s,l,u){return n=>n.map(i=>{if(!i[s])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];const d=z(i[s],e,t,u);return d.length?{[l]:i[l],[s]:d}:[]})}const F=(...e)=>t=>e.reduce((s,l)=>l(s),t);var ue={data(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default(e,t){return E(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue(){return this.modelValue||this.modelValue===0?Array.isArray(this.modelValue)?this.modelValue:[this.modelValue]:[]},filteredOptions(){const e=this.search||"",t=e.toLowerCase().trim();let s=this.options.concat();return this.internalSearch?s=this.groupValues?this.filterAndFlat(s,t,this.label):z(s,t,this.label,this.customLabel):s=this.groupValues?A(this.groupValues,this.groupLabel)(s):s,s=this.hideSelected?s.filter(ne(this.isSelected)):s,this.taggable&&t.length&&!this.isExistingOption(t)&&(this.tagPosition==="bottom"?s.push({isTag:!0,label:e}):s.unshift({isTag:!0,label:e})),s.slice(0,this.optionsLimit)},valueKeys(){return this.trackBy?this.internalValue.map(e=>e[this.trackBy]):this.internalValue},optionKeys(){return(this.groupValues?this.flatAndStrip(this.options):this.options).map(t=>this.customLabel(t,this.label).toString().toLowerCase())},currentOptionLabel(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:{handler(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("update:modelValue",this.multiple?[]:null))},deep:!0},search(){this.$emit("search-change",this.search)}},emits:["open","search-change","close","select","update:modelValue","remove","tag"],methods:{getValue(){return this.multiple?this.internalValue:this.internalValue.length===0?null:this.internalValue[0]},filterAndFlat(e,t,s){return F(re(t,s,this.groupValues,this.groupLabel,this.customLabel),A(this.groupValues,this.groupLabel))(e)},flatAndStrip(e){return F(A(this.groupValues,this.groupLabel),oe)(e)},updateSearch(e){this.search=e},isExistingOption(e){return this.options?this.optionKeys.indexOf(e)>-1:!1},isSelected(e){const t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isOptionDisabled(e){return!!e.$isDisabled},getOptionLabel(e){if(E(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;const t=this.customLabel(e,this.label);return E(t)?"":t},select(e,t){if(e.$isLabel&&this.groupSelect){this.selectGroup(e);return}if(!(this.blockKeys.indexOf(t)!==-1||this.disabled||e.$isDisabled||e.$isLabel)&&!(this.max&&this.multiple&&this.internalValue.length===this.max)&&!(t==="Tab"&&!this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e)){t!=="Tab"&&this.removeElement(e);return}this.multiple?this.$emit("update:modelValue",this.internalValue.concat([e])):this.$emit("update:modelValue",e),this.$emit("select",e,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup(e){const t=this.options.find(s=>s[this.groupLabel]===e.$groupLabel);if(!!t){if(this.wholeGroupSelected(t)){this.$emit("remove",t[this.groupValues],this.id);const s=this.internalValue.filter(l=>t[this.groupValues].indexOf(l)===-1);this.$emit("update:modelValue",s)}else{let s=t[this.groupValues].filter(l=>!(this.isOptionDisabled(l)||this.isSelected(l)));this.max&&s.splice(this.max-this.internalValue.length),this.$emit("select",s,this.id),this.$emit("update:modelValue",this.internalValue.concat(s))}this.closeOnSelect&&this.deactivate()}},wholeGroupSelected(e){return e[this.groupValues].every(t=>this.isSelected(t)||this.isOptionDisabled(t))},wholeGroupDisabled(e){return e[this.groupValues].every(this.isOptionDisabled)},removeElement(e,t=!0){if(this.disabled||e.$isDisabled)return;if(!this.allowEmpty&&this.internalValue.length<=1){this.deactivate();return}const s=typeof e=="object"?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);if(this.multiple){const l=this.internalValue.slice(0,s).concat(this.internalValue.slice(s+1));this.$emit("update:modelValue",l)}else this.$emit("update:modelValue",null);this.$emit("remove",e,this.id),this.closeOnSelect&&t&&this.deactivate()},removeLastElement(){this.blockKeys.indexOf("Delete")===-1&&this.search.length===0&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate(){this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&this.pointer===0&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(()=>this.$refs.search&&this.$refs.search.focus())):this.preventAutofocus||typeof this.$el<"u"&&this.$el.focus(),this.$emit("open",this.id))},deactivate(){!this.isOpen||(this.isOpen=!1,this.searchable?typeof this.$refs.search<"u"&&this.$refs.search.blur():typeof this.$el<"u"&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle(){this.isOpen?this.deactivate():this.activate()},adjustPosition(){if(typeof window>"u")return;const e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||this.openDirection==="below"||this.openDirection==="bottom"?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}},he={data(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition(){return this.pointer*this.optionHeight},visibleElements(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions(){this.pointerAdjust()},isOpen(){this.pointerDirty=!1},pointer(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString())}},methods:{optionHighlight(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},groupHighlight(e,t){if(!this.groupSelect)return["multiselect__option--disabled",{"multiselect__option--group":t.$isLabel}];const s=this.options.find(l=>l[this.groupLabel]===t.$groupLabel);return s&&!this.wholeGroupDisabled(s)?["multiselect__option--group",{"multiselect__option--highlight":e===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(s)}]:"multiselect__option--disabled"},addPointerElement({key:e}="Enter"){this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset(){!this.closeOnSelect||(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet(e){this.pointer=e,this.pointerDirty=!0}}},q={name:"vue-multiselect",mixins:[ue,he],compatConfig:{MODE:3,ATTR_ENUMERATED_COERCION:!1},props:{name:{type:String,default:""},modelValue:{type:null,default(){return[]}},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:e=>`and ${e} more`},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible(){return(this.singleValue||this.singleValue===0)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible(){return!this.internalValue.length&&(!this.searchable||!this.isOpen)},visibleValues(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue(){return this.internalValue[0]},deselectLabelText(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText(){return this.showLabels?this.selectLabel:""},selectGroupLabelText(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText(){return this.showLabels?this.selectedLabel:""},inputStyle(){return this.searchable||this.multiple&&this.modelValue&&this.modelValue.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove(){return this.openDirection==="above"||this.openDirection==="top"?!0:this.openDirection==="below"||this.openDirection==="bottom"?!1:this.preferredOpenDirection==="above"},showSearchInput(){return this.searchable&&(this.hasSingleSelectedSlot&&(this.visibleSingleValue||this.visibleSingleValue===0)?this.isOpen:!0)}}};const de={ref:"tags",class:"multiselect__tags"},pe={class:"multiselect__tags-wrap"},ce={class:"multiselect__spinner"},fe={key:0},ge={class:"multiselect__option"},me={class:"multiselect__option"},be=O("No elements found. Consider changing the search query."),ve={class:"multiselect__option"},ye=O("List is empty.");function _e(e,t,s,l,u,n){return o(),c("div",{tabindex:e.searchable?-1:s.tabindex,class:[{"multiselect--active":e.isOpen,"multiselect--disabled":s.disabled,"multiselect--above":n.isAbove,"multiselect--has-options-group":n.hasOptionGroup},"multiselect"],onFocus:t[14]||(t[14]=i=>e.activate()),onBlur:t[15]||(t[15]=i=>e.searchable?!1:e.deactivate()),onKeydown:[t[16]||(t[16]=b(r(i=>e.pointerForward(),["self","prevent"]),["down"])),t[17]||(t[17]=b(r(i=>e.pointerBackward(),["self","prevent"]),["up"]))],onKeypress:t[18]||(t[18]=b(r(i=>e.addPointerElement(i),["stop","self"]),["enter","tab"])),onKeyup:t[19]||(t[19]=b(i=>e.deactivate(),["esc"])),role:"combobox","aria-owns":"listbox-"+e.id},[f(e.$slots,"caret",{toggle:e.toggle},()=>[a("div",{onMousedown:t[1]||(t[1]=r(i=>e.toggle(),["prevent","stop"])),class:"multiselect__select"},null,32)]),f(e.$slots,"clear",{search:e.search}),a("div",de,[f(e.$slots,"selection",{search:e.search,remove:e.removeElement,values:n.visibleValues,isOpen:e.isOpen},()=>[_(a("div",pe,[(o(!0),c(C,null,M(n.visibleValues,(i,d)=>f(e.$slots,"tag",{option:i,search:e.search,remove:e.removeElement},()=>[(o(),c("span",{class:"multiselect__tag",key:d},[a("span",{textContent:g(e.getOptionLabel(i))},null,8,["textContent"]),a("i",{tabindex:"1",onKeypress:b(r(p=>e.removeElement(i),["prevent"]),["enter"]),onMousedown:r(p=>e.removeElement(i),["prevent"]),class:"multiselect__tag-icon"},null,40,["onKeypress","onMousedown"])]))])),256))],512),[[$,n.visibleValues.length>0]]),e.internalValue&&e.internalValue.length>s.limit?f(e.$slots,"limit",{key:0},()=>[a("strong",{class:"multiselect__strong",textContent:g(s.limitText(e.internalValue.length-s.limit))},null,8,["textContent"])]):m("v-if",!0)]),a(H,{name:"multiselect__loading"},{default:N(()=>[f(e.$slots,"loading",{},()=>[_(a("div",ce,null,512),[[$,s.loading]])])]),_:3}),e.searchable?(o(),c("input",{key:0,ref:"search",name:s.name,id:e.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder,style:n.inputStyle,value:e.search,disabled:s.disabled,tabindex:s.tabindex,onInput:t[2]||(t[2]=i=>e.updateSearch(i.target.value)),onFocus:t[3]||(t[3]=r(i=>e.activate(),["prevent"])),onBlur:t[4]||(t[4]=r(i=>e.deactivate(),["prevent"])),onKeyup:t[5]||(t[5]=b(i=>e.deactivate(),["esc"])),onKeydown:[t[6]||(t[6]=b(r(i=>e.pointerForward(),["prevent"]),["down"])),t[7]||(t[7]=b(r(i=>e.pointerBackward(),["prevent"]),["up"])),t[9]||(t[9]=b(r(i=>e.removeLastElement(),["stop"]),["delete"]))],onKeypress:t[8]||(t[8]=b(r(i=>e.addPointerElement(i),["prevent","stop","self"]),["enter"])),class:"multiselect__input","aria-controls":"listbox-"+e.id},null,44,["name","id","placeholder","value","disabled","tabindex","aria-controls"])):m("v-if",!0),n.isSingleLabelVisible?(o(),c("span",{key:1,class:"multiselect__single",onMousedown:t[10]||(t[10]=r((...i)=>e.toggle&&e.toggle(...i),["prevent"]))},[f(e.$slots,"singleLabel",{option:n.singleValue},()=>[O(g(e.currentOptionLabel),1)])],32)):m("v-if",!0),n.isPlaceholderVisible?(o(),c("span",{key:2,class:"multiselect__placeholder",onMousedown:t[11]||(t[11]=r((...i)=>e.toggle&&e.toggle(...i),["prevent"]))},[f(e.$slots,"placeholder",{},()=>[O(g(e.placeholder),1)])],32)):m("v-if",!0)],512),a(H,{name:"multiselect"},{default:N(()=>[_(a("div",{class:"multiselect__content-wrapper",onFocus:t[12]||(t[12]=(...i)=>e.activate&&e.activate(...i)),tabindex:"-1",onMousedown:t[13]||(t[13]=r(()=>{},["prevent"])),style:{maxHeight:e.optimizedHeight+"px"},ref:"list"},[a("ul",{class:"multiselect__content",style:n.contentStyle,role:"listbox",id:"listbox-"+e.id},[f(e.$slots,"beforeList"),e.multiple&&e.max===e.internalValue.length?(o(),c("li",fe,[a("span",ge,[f(e.$slots,"maxElements",{},()=>[O("Maximum of "+g(e.max)+" options selected. First remove a selected option to select another.",1)])])])):m("v-if",!0),!e.max||e.internalValue.length<e.max?(o(!0),c(C,{key:1},M(e.filteredOptions,(i,d)=>(o(),c("li",{class:"multiselect__element",key:d,id:e.id+"-"+d,role:i&&(i.$isLabel||i.$isDisabled)?null:"option"},[i&&(i.$isLabel||i.$isDisabled)?m("v-if",!0):(o(),c("span",{key:0,class:[e.optionHighlight(d,i),"multiselect__option"],onClick:r(p=>e.select(i),["stop"]),onMouseenter:r(p=>e.pointerSet(d),["self"]),"data-select":i&&i.isTag?e.tagPlaceholder:n.selectLabelText,"data-selected":n.selectedLabelText,"data-deselect":n.deselectLabelText},[f(e.$slots,"option",{option:i,search:e.search,index:d},()=>[a("span",null,g(e.getOptionLabel(i)),1)])],42,["onClick","onMouseenter","data-select","data-selected","data-deselect"])),i&&(i.$isLabel||i.$isDisabled)?(o(),c("span",{key:1,"data-select":e.groupSelect&&n.selectGroupLabelText,"data-deselect":e.groupSelect&&n.deselectGroupLabelText,class:[e.groupHighlight(d,i),"multiselect__option"],onMouseenter:r(p=>e.groupSelect&&e.pointerSet(d),["self"]),onMousedown:r(p=>e.selectGroup(i),["prevent"])},[f(e.$slots,"option",{option:i,search:e.search,index:d},()=>[a("span",null,g(e.getOptionLabel(i)),1)])],42,["data-select","data-deselect","onMouseenter","onMousedown"])):m("v-if",!0)],8,["id","role"]))),128)):m("v-if",!0),_(a("li",null,[a("span",me,[f(e.$slots,"noResult",{search:e.search},()=>[be])])],512),[[$,s.showNoResults&&e.filteredOptions.length===0&&e.search&&!s.loading]]),_(a("li",null,[a("span",ve,[f(e.$slots,"noOptions",{},()=>[ye])])],512),[[$,s.showNoOptions&&(e.options.length===0||n.hasOptionGroup===!0&&e.filteredOptions.length===0)&&!e.search&&!s.loading]]),f(e.$slots,"afterList")],12,["id"])],36),[[$,e.isOpen]])]),_:3})],42,["tabindex","aria-owns"])}q.render=_e;const L=e=>(K("data-v-0b28cb03"),e=e(),R(),e),$e={class:"pagination-button"},Se=["data-state"],Oe=L(()=>h("i",null,null,-1)),Ve=L(()=>h("i",null,null,-1)),Le=[Oe,Ve],we=L(()=>h("i",null,null,-1)),Pe=L(()=>h("i",null,null,-1)),Be=L(()=>h("i",null,null,-1)),ke=[we,Pe,Be],Te={name:"PaginationButton"},De=Object.assign(Te,{props:{isDisabled:{type:Boolean},left:{type:Boolean},doubleIcon:{type:Boolean}},setup(e){const t=e;return(s,l)=>(o(),v("button",$e,[t.doubleIcon?(o(),v("span",{key:1,class:I(["pagination-button__icon pagination-button__icon--double-icon",[t.left?"left":"right"]])},ke,2)):(o(),v("span",{key:0,class:I(["pagination-button__icon",[t.left?"left":"right"]]),"data-state":t.isDisabled?"disabled":""},Le,10,Se))]))}}),B=D(De,[["__scopeId","data-v-0b28cb03"]]);const Ee=e=>(K("data-v-4bf47b18"),e=e(),R(),e),Ae={class:"pagination__wrapper"},Ce={class:"pagination__buttons"},Me=Ee(()=>h("span",{class:"pagination__pages-divider"},"/",-1)),Ne={class:"pagination__pages-count"},Ge={class:"pagination__buttons"},He={name:"UIPagination"},Ie=Object.assign(He,{props:{offset:{type:Number,default:U},limit:{type:Number,default:j},pagesCount:{type:Number,default:0}},emits:["update-offset","update-limit"],setup(e,{emit:t}){const s=e,l=V(s.offset),u=V(s.limit),n=V(l.value+1),i=k(()=>l.value===0),d=k(()=>l.value===s.pagesCount-1||s.pagesCount===0),p=(S=null)=>{S!==null&&(l.value=Math.min(S-1,s.pagesCount-1)),n.value=l.value+1,l.value=Math.max(0,Math.min(l.value,s.pagesCount-1)),t("update-offset",l.value)},G=S=>{l.value=0,t("update-limit",S)},w=()=>{l.value!==s.pagesCount-1&&(l.value+=1,p())},J=()=>{l.value!==0&&(l.value-=1,p())},Q=()=>{l.value=0,p()},W=()=>{l.value=s.pagesCount-1,p()};return(S,y)=>(o(),v("div",Ae,[h("div",Ce,[i.value?m("",!0):(o(),c(B,{key:0,left:"","double-icon":"","aria-label":"first page",onClick:Q})),a(B,{"is-disabled":i.value,left:"","aria-label":"previous page",onClick:J},null,8,["is-disabled"])]),h("form",{class:"pagination__pages",onSubmit:y[1]||(y[1]=r(P=>p(n.value),["prevent"]))},[a(ie,{"model-value":n.value,"input-number":"","integer-number":"",class:"pagination__pages-input","onUpdate:modelValue":y[0]||(y[0]=P=>n.value=P)},null,8,["model-value"]),Me,h("span",Ne,g(s.pagesCount),1)],32),a(T(q),{modelValue:u.value,"onUpdate:modelValue":y[2]||(y[2]=P=>u.value=P),options:T(le),class:"pagination__select",searchable:!1,"clear-on-select":"","allow-empty":!1,"show-labels":!1,onSelect:G},null,8,["modelValue","options"]),h("div",Ge,[a(B,{"is-disabled":d.value,"aria-label":"next page",onClick:w},null,8,["is-disabled"]),d.value?m("",!0):(o(),c(B,{key:0,"aria-label":"last page","double-icon":"",onClick:W}))])]))}}),Fe=D(Ie,[["__scopeId","data-v-4bf47b18"]]);const Ke={class:"post__item"},Re={class:"post__item-info"},Ue={class:"title post__item-title text-ellipsis"},je={class:"post__item-text"},ze={class:"uppercase-first-symbol"},qe={name:"PostItem"},Je=Object.assign(qe,{props:{id:{type:[Number,String],default:0},userId:{type:[Number,String],default:0},title:{type:String,default:""},body:{type:String,default:""}},setup(e){const t=e;return(s,l)=>{const u=x("router-link");return o(),c(u,{to:{name:T(ee).POST_DETAIL_PAGE.routeName,params:{id:t.id}}},{default:N(()=>[h("div",Ke,[h("div",Re,[h("p",null,"Post: "+g(t.id),1),h("p",null,"Author: "+g(t.userId),1)]),h("h6",Ue," Title: "+g(t.title),1),h("div",je,[h("p",ze,g(t.body),1)])])]),_:1},8,["to"])}}}),Qe=D(Je,[["__scopeId","data-v-2ef42dc7"]]);const We={class:"posts__list-wrapper"},Xe={class:"posts__list"},Ye={name:"PostsList"},Ze=Object.assign(Ye,{setup(e){const t=X(),s=V(U),l=V(j),u=k(()=>t.postsList.slice(s.value*l.value,s.value*l.value+l.value)),n=k(()=>Math.ceil(t.totalValue/l.value)),i=p=>{s.value=p},d=p=>{l.value=p};return te(()=>{t.getPostsList()}),(p,G)=>(o(),v("div",We,[h("div",Xe,[(o(!0),v(C,null,M(u.value,w=>(o(),c(Qe,se({key:w.id},w),null,16))),128))]),_(a(Fe,{offset:s.value,limit:l.value,"pages-count":n.value,onUpdateOffset:i,onUpdateLimit:d},null,8,["offset","limit","pages-count"]),[[$,u.value.length]])]))}}),xe=D(Ze,[["__scopeId","data-v-57c84f35"]]),et={class:"section-content"},tt={class:"container-content"},st={name:"PostsPage"},at=Object.assign(st,{setup(e){const t=Y();return(s,l)=>(o(),v("section",et,[T(t).loading?(o(),c(Z,{key:0})):m("",!0),h("div",tt,[a(xe)])]))}});export{at as default};