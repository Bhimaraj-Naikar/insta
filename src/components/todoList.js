import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Add from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../redux/reducers/todoSlice'

const TodoList = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => {
        console.log("🚀 ~ TodoList ~ todos:", todos)
        return state.todos;
    })
    function addTodoList() {
        if (value.trim())
            dispatch(addTodo(value));
        setValue('')
    }
    function removeTodoList(id) {
        dispatch(removeTodo(id));
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Todo List</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    editable
                    value={value}
                    onChangeText={(e) => { setValue(e) }}
                    style={styles.input}
                    placeholder='Add your task'
                />
                <TouchableOpacity onPress={addTodoList}>
                     <View style={{borderRadius:5, borderWidth:2, borderColor:'green'}}>
                    <Add name='add' size={30} color='green'/>
                            </View>
                </TouchableOpacity>
            </View>
            <FlatList 
            data={todos}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item?.id}
            renderItem={({item}) => (
                <View style={styles.todoListContainer}>
                        <Text key={item?.id} style={styles.todoItem}>{
                        item?.text.length > 30 ? item?.text.slice(0,30) + '...' : item?.text
                        }</Text>
                        <TouchableOpacity onPress={() => removeTodoList(item?.id)}>
                                <Icon name='delete-outline' size={30} color='#cb2626ff' />
                           
                        </TouchableOpacity>

                    </View>
            )}
            />

        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    container: {},
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    input: {
        borderWidth: 1,
        textAlign: 'left',
        paddingHorizontal: 3,
        paddingVertical: 2,
        fontSize: 20,
        width: 300,
        borderRadius: 3,
        height: 40
    },
    headerContainer: {
        marginVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffaa00ff'
    },
    addBtn: {
        fontSize: 20,
        borderWidth: 2,
        borderColor: '#03fc3dff',
        borderRadius: 3,
        height: 40,
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingTop: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeBtn: {
        fontSize: 20,
        borderWidth: 2,
        borderColor: '#ff0000ff',
        borderRadius: 3,
        height: 40,
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingTop: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    todoListContainer: {

        marginTop: 10,
        // backgroundColor: '#d6d6d636',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    todoItem: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        borderColor: 'red',
        borderRadius: 3,
        margin: 5,
        paddingVertical: 8,
        fontSize: 20,
        paddingLeft: 5,
        flex: 1
    },
    listContainer: {
        backgroundColor: "#d6d6d636",
        overflow:'visible',
        borderRadius: 3,
        marginTop: 10,
        paddingRight: 10,

    }
})