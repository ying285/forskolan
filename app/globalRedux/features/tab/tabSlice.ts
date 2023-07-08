'use client';

import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface tabState{
    tabActive:string;
    isActive1:boolean;
    isActive2:boolean;
   
    getData:string[];
    
   

    
    
}

const initialState: tabState={
    tabActive:'',
    isActive1:false,
    isActive2:false,
    getData:[],
   
    
   
}

const tabSlice=createSlice({
    name:'tab',
    initialState,
    reducers:{
        collapseActiveHandler(state, action:PayloadAction<string>){
            state.tabActive=action.payload
           },
        isCollapseActiveHandler(state, action:PayloadAction<any>){
            if(state.isActive1 = action.payload){
                state.isActive1=!state.isActive1;
            } else if (state.isActive2 = action.payload){
                state.isActive2=!state.isActive1;
            }
            
           },
       
        getDataHandler(state, action:PayloadAction <any[]>){
            state.getData=action.payload
        },
        
        
           },
    
})


export const tabActions = tabSlice.actions;
export default tabSlice.reducer;