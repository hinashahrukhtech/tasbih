import React,{Component} from 'react';
import { StyleSheet,} from 'react-native';
export default StyleSheet.create( {

    bgcontainer:{
      flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
      },
      Container: {
        marginLeft:"10%",
       marginTop:"90%",
        justifyContent:"center",
        width:"100%",
      },
      Input:{
       color: '#0E061C',
        borderRadius:25,
        backgroundColor:'#F9FDF0',
        borderWidth:2,
        borderColor:'#0E061C',
         marginTop: 30,
         padding:10,
        height:45,
        fontSize:20, 
       maxWidth:"90%",
      },
      btn:{
        marginTop:"17%",
        borderRadius:10,
        backgroundColor:'#0E061C',
        color:'#F9FDF0',
        borderWidth:2,
        borderColor:'#F9FDF0',
        height:50, 
      width:"100%",
      },
      btnRound:{
             marginTop:"5%",
        borderRadius:50,
        backgroundColor:'#0E061C',
        color:'#F9FDF0',
        borderWidth:2,
        borderColor:'#F9FDF0',
        height:50,
        width:"90%",
             },
      text:{
        justifyContent:"center",
        textAlign:"center",
           fontSize:30,        
           color:'#F9FDF0',
   
          
      },
      btnContainer:{
        marginTop:"33%",
        flex: 1,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
      
      },
    btnT:{
     flex:1,
      backgroundColor:'#0E061C',
      borderWidth:2,
      borderColor:'#F9FDF0',
      justifyContent:"center",
      height:50,
      borderRadius:10,
    },
    BtnC:{
      marginTop:"120%",
           padding:10,
      borderRadius:50,
      color:'#F9FDF0',
      borderWidth:2,
      borderColor:'#F9FDF0',
      backgroundColor:"#0E061C",
      height:75,
      width:75,
       
    },

    btnCC:{
      marginTop:"12%",
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:"39%",
  } ,
  RVIEW:{
    flexDirection:"row",
    borderRadius:25,
    backgroundColor:'#F9FDF0',
     marginTop: 5,
     padding:5,
    height:50,
    fontSize:20,
    width:"90%",
  } ,
  RVIEW2:{
     marginTop:20,
    height:50,
    backgroundColor:'#F9FDF0',
    flexDirection:"row",
    width:"90%",
  },
  Input2:{
    color: '#0E061C',
     fontSize:20, 
  maxWidth:"50%",
  },

text2:{
  padding:12,
  textAlignVertical:"center",
  fontSize:15,        
  color:"#0E061C",
},
Container2: {
  marginLeft:"10%",
 marginTop:"56%",
  justifyContent:"center",
  width:"100%",

}}

    );


