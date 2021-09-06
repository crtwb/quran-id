(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{a661:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"to-top"},[a("q-scroll-observer",{on:{scroll:t.onScroll}}),a("q-page-sticky",{staticStyle:{"z-index":"10"},attrs:{position:"bottom-right",offset:[18,18]}},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t.show?a("q-btn",{attrs:{color:"primary",icon:"expand_less","fab-mini":""},on:{click:function(e){return t.toTop()}}}):t._e()],1)],1)],1)},r=[],i={name:"ToTop",data(){return{show:!1}},methods:{onScroll(t){t.position>900?this.show=!0:this.show=!1},toTop(){const t=document.getElementsByTagName("body")[0];this.scrollToElement(t)}}},n=i,o=a("2877"),l=a("ed5e"),c=a("de5e"),h=a("9c40"),p=a("eebe"),u=a.n(p),m=Object(o["a"])(n,s,r,!1,null,null,null);e["a"]=m.exports;u()(m,"components",{QScrollObserver:l["a"],QPageSticky:c["a"],QBtn:h["a"]})},d942:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quran-reader-detail"},[a("q-scroll-observer",{on:{scroll:t.onScroll}}),t.$store.state.quran.loading.fetchSurah?a("quran-reader-detail-skeleton"):[a("q-header",{ref:"header",staticClass:"bg-transparent"},[a("q-toolbar",{ref:"toolbar",staticClass:"bg-white text-black q-py-sm"},[a("q-btn",{attrs:{icon:"arrow_back",flat:"",round:"",dense:""},on:{click:function(e){return t.$router.go(-1)}}}),a("q-item",{staticClass:"q-py-sm q-px-sm"},[a("q-item-section",[a("q-item-label",[t._v(t._s(t.surah.name_simple))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.surahNameTranslation)+", "+t._s(t.surah.verses_count)+" ayat\n            ")])],1)],1),a("q-space"),a("q-btn",{staticClass:"nowrap",attrs:{flat:"",rounded:"",dense:"","icon-right":"arrow_drop_down"},on:{click:function(e){return t.prepareAyahChange()}}},[t._v("\n          "+t._s(t.currentAyah)+"\n        ")]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"bookmark_border"},on:{click:function(e){return t.bookmark()}}})],1),a("q-separator")],1),a("div",{staticClass:"content bg-white",style:[{"padding-bottom":"64px"},t.contentStyles]},[t.surah.bismillah_pre?a("div",{staticClass:"text-basmalah text-center q-py-md",staticStyle:{"font-size":"22pt"}},[t._v("\n        "+t._s(t.basmalahArabic)+"\n      ")]):t._e(),a("q-list",{attrs:{separator:""}},t._l(t.surah.ayahs,(function(e,s){return a("q-item",{key:e.verse_key,ref:e.verse_key,refInFor:!0,staticClass:"q-pt-md"},[a("q-item-section",[a("q-item-label",{staticClass:"text-arabic text-right"},[t._v("\n              "+t._s(e.text_uthmani)+"\n              "),a("span",{staticClass:"text-arabic-number q-mr-xs",domProps:{innerHTML:t._s(t.arabicNumber(t.verseNumberFromKey(e.verse_key)))}})]),a("q-item-label",{staticClass:"q-pt-sm translation-wrap"},[a("span",[t._v(t._s(t.verseNumberFromKey(e.verse_key)+". "))]),a("span",{domProps:{innerHTML:t._s(t.surah.translations[s].text)}})]),a("q-btn",{staticClass:"self-end",attrs:{icon:"more_vert",color:"grey-3","text-color":"black",size:"xs",round:"",dense:"",unelevated:""},on:{click:function(a){return t.onOptionClicked(e,t.surah.translations[s])}}})],1)],1)})),1)],1)],a("ayah-options-dialog",{attrs:{show:t.showAyahOptionsDialog,"ayah-number":t.ayahOptionsDialogData.ayahNumber,"surah-name":t.ayahOptionsDialogData.surahName,arabic:t.ayahOptionsDialogData.arabic,translation:t.ayahOptionsDialogData.translation},on:{"update:show":function(e){t.showAyahOptionsDialog=e}}}),a("q-dialog",{model:{value:t.showAyahChangerDialog,callback:function(e){t.showAyahChangerDialog=e},expression:"showAyahChangerDialog"}},[a("q-card",{staticClass:"bg-primary",staticStyle:{width:"80vw"}},[a("q-card-section",{staticClass:"row items-center text-white"},[a("div",{staticClass:"text-h6"},[t._v("Pergi ke ayat")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-card-section",{staticClass:"bg-white"},[a("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Filter nomor ayat...",dense:"",type:"number",min:"1"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.ayahChangerKeyword,callback:function(e){t.ayahChangerKeyword=e},expression:"ayahChangerKeyword"}})],1),a("q-list",{staticClass:"scroll bg-white",staticStyle:{"max-height":"60vh"},attrs:{separator:""}},[0==t.ayahsChangerFiltered.length?a("q-item",[a("q-item-section",{staticClass:"text-center text-grey-6"},[t._v("\n            Tidak tersedia\n          ")])],1):t._e(),t._l(t.ayahsChangerFiltered,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:"ayah-changer-"+e.verse_key,attrs:{clickable:""},on:{click:function(a){return t.onAyahChange(e)}}},[a("q-item-section",[t._v("\n            Ayat "+t._s(t.verseNumberFromKey(e.verse_key))+"\n          ")])],1)}))],2)],1)],1),a("to-top")],2)},r=[],i=a("ded3"),n=a.n(i),o=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quran-reader-detail-skeleton"},[a("q-header",{staticClass:"bg-transparent"},[a("q-toolbar",{staticClass:"bg-white q-px-md q-py-sm"},[a("q-skeleton",{staticClass:"q-mr-sm",attrs:{type:"circle",size:"24px"}}),a("q-item",{staticClass:"q-py-sm q-px-sm"},[a("q-item-section",[a("q-item-label",[a("q-skeleton",{attrs:{type:"text",width:"75px"}})],1),a("q-item-label",{attrs:{caption:""}},[a("q-skeleton",{attrs:{type:"text",width:"100px"}})],1)],1)],1),a("q-space"),a("q-skeleton",{attrs:{type:"circle",size:"24px"}})],1),a("q-separator",{attrs:{color:"grey-3"}})],1),a("div",{staticClass:"bg-white",staticStyle:{"min-height":"100vh"}},[a("q-list",t._l(10,(function(e){return a("div",{key:e},[a("q-item",{staticClass:"q-py-md"},[a("q-item-section",[a("q-item-label",{staticClass:"text-right"},[a("q-skeleton",{attrs:{type:"text",height:"30px"}})],1),a("q-item-label",{staticClass:"q-pt-sm"},[a("q-skeleton",{attrs:{type:"text"}}),a("q-skeleton",{attrs:{type:"text",width:"75%"}})],1)],1),a("q-item-section",{staticClass:"q-mt-sm",attrs:{side:"",top:""}},[a("q-skeleton",{attrs:{type:"circle",size:"16px"}})],1)],1),10!=e?a("q-separator",{attrs:{color:"grey-3"}}):t._e()],1)})),0)],1)],1)},c=[],h=a("2877"),p=a("e359"),u=a("65c6"),m=a("293e"),d=a("66e5"),y=a("4074"),b=a("0170"),g=a("2c91"),q=a("eb85"),v=a("1c1c"),f=a("eebe"),w=a.n(f),k={},_=Object(h["a"])(k,l,c,!1,null,null,null),C=_.exports;w()(_,"components",{QHeader:p["a"],QToolbar:u["a"],QSkeleton:m["a"],QItem:d["a"],QItemSection:y["a"],QItemLabel:b["a"],QSpace:g["a"],QSeparator:q["a"],QList:v["a"]});var x=a("fb63"),S=a("a661"),Q={name:"QuranReaderDetail",components:{QuranReaderDetailSkeleton:C,AyahOptionsDialog:x["a"],ToTop:S["a"]},props:{offsetTop:{type:Number,default:0},verseKey:{type:String}},data(){return{init:!0,showAyahOptionsDialog:!1,showAyahChangerDialog:!1,ayahOptionsDialogData:{ayahNumber:"",surahName:"",arabic:"",translation:""},currentAyah:1,ayahChangerKeyword:null,contentStyles:null}},meta(){return{title:this.pageTitle}},computed:n()(n()({},Object(o["b"])({surah:"quran/getSurah"})),{},{pageTitle(){return this.surah?"QS. "+this.surah.name_simple+" | "+this.surahNameTranslation+" | "+this.productName:this.productName},surahNameTranslation(){var t;return this.normalizeSurahNameTranslation(null===(t=this.surah)||void 0===t?void 0:t.translated_name.name)},surahSimple(){const t=Object.assign({},this.surah);return delete t.ayahs,delete t.translations,t},ayahsChangerFiltered(){var t,e;return this.ayahChangerKeyword?this.surah.ayahs.filter((t=>this.verseNumberFromKey(t.verse_key).startsWith(this.ayahChangerKeyword))):null!==(t=null===(e=this.surah)||void 0===e?void 0:e.ayahs)&&void 0!==t?t:[]}}),methods:{onScroll(t){["up","down"].includes(t.direction)&&!this.init&&this.updateSurahLastRead(t.position)},fitContentHeight(){const t=this.$refs.header.$el.clientHeight+"px";this.contentStyles={minHeight:`calc(100vh - ${t})`}},verseNumberFromKey(t){return t.split(":")[1]},onOptionClicked(t,e){this.ayahOptionsDialogData={ayahNumber:e.verse_number,surahName:this.surah.name_simple,arabic:t.text_uthmani,translation:e.text},this.showAyahOptionsDialog=!0},prepareAyahChange(){this.showAyahChangerDialog=!0},onAyahChange(t){this.showAyahChangerDialog=!1,this.currentAyah=this.verseNumberFromKey(t.verse_key),this.scrollToElement(this.$refs[t.verse_key][0].$el)},updateSurahLastRead(t){this.$store.dispatch("quran/setSurahLastRead",{surah:this.surahSimple,offsetTop:t})},bookmark(){this.$q.notify({type:"toast-warning",message:"Maaf fitur ini belum tersedia."})}},created(){this.$store.dispatch("quran/fetchSurah",this.$route.params.surahId).then((t=>{this.$nextTick((()=>{this.init=!1,this.track(this.pageTitle),this.fitContentHeight(),window.scrollTo(0,this.offsetTop),this.verseKey&&this.scrollToElement(this.$refs[this.verseKey][0].$el)}))}))}},D=Q,N=a("ed5e"),T=a("9c40"),O=a("24e8"),$=a("f09f"),A=a("a370"),K=a("27f9"),I=a("0016"),F=a("7f67"),j=a("714f"),L=Object(h["a"])(D,s,r,!1,null,null,null);e["default"]=L.exports;w()(L,"components",{QScrollObserver:N["a"],QHeader:p["a"],QToolbar:u["a"],QBtn:T["a"],QItem:d["a"],QItemSection:y["a"],QItemLabel:b["a"],QSpace:g["a"],QSeparator:q["a"],QList:v["a"],QDialog:O["a"],QCard:$["a"],QCardSection:A["a"],QInput:K["a"],QIcon:I["a"]}),w()(L,"directives",{ClosePopup:F["a"],Ripple:j["a"]})},fb63:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showDialog?a("q-dialog",{model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("q-card",{staticClass:"bg-primary",staticStyle:{width:"80vw"}},[a("q-card-section",{staticClass:"row items-center text-white"},[a("div",{staticClass:"text-h6"},[t._v("Ayat "+t._s(t.ayahNumber))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-list",{staticClass:"bg-white",attrs:{separator:""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){return t.copy("ayah")}}},[a("q-item-section",[t._v("\n          Salin ayat\n        ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){return t.copy("translation")}}},[a("q-item-section",[t._v("\n          Salin terjemahan\n        ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){return t.copy("both")}}},[a("q-item-section",[t._v("\n          Salin ayat dan terjemahan\n        ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){return t.bookmark()}}},[a("q-item-section",[t._v("\n          Bookmark\n        ")])],1)],1)],1)],1):t._e()},r=[],i=a("cdde"),n={name:"AyahOptionsDialog",props:{show:{type:Boolean,default:!1},surahName:{type:String,required:!0},ayahNumber:{type:[Number,String],required:!0},arabic:{type:String,required:!0},translation:{type:String,required:!0}},data(){return{showDialog:!1}},watch:{show:{immediate:!0,handler(t){this.showDialog=t}},showDialog(t){this.$emit("update:show",t)}},methods:{copy(t){let e;"ayah"==t?e=this.arabic:"translation"==t?e=this.translation:"both"==t&&(e=this.arabic+"\n\n"+this.translation),e+="\n\n",e+=`QS. ${this.surahName}: ${this.ayahNumber}`,e=this.removeFootNote(e),Object(i["a"])(e).then((()=>{this.$q.notify({type:"toast",message:"Berhasil disalin."})})).catch((()=>{this.$q.notify({type:"toast-error",message:"Gagal! Terjadi kesalahan."})}))},bookmark(){this.$q.notify({type:"toast-warning",message:"Maaf fitur ini belum tersedia."})}}},o=n,l=a("2877"),c=a("24e8"),h=a("f09f"),p=a("a370"),u=a("2c91"),m=a("9c40"),d=a("1c1c"),y=a("66e5"),b=a("4074"),g=a("7f67"),q=a("714f"),v=a("eebe"),f=a.n(v),w=Object(l["a"])(o,s,r,!1,null,null,null);e["a"]=w.exports;f()(w,"components",{QDialog:c["a"],QCard:h["a"],QCardSection:p["a"],QSpace:u["a"],QBtn:m["a"],QList:d["a"],QItem:y["a"],QItemSection:b["a"]}),f()(w,"directives",{ClosePopup:g["a"],Ripple:q["a"]})}}]);