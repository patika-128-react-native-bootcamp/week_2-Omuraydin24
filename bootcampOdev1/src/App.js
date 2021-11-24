import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Badge from "./Components/Badge";
import ProductInput from './Components/ProductInput';
import ProductCard from './Components/ProductCard';

function App() {
  const [arrayData, setArrayData] = useState([]);

  const renderCard = ({ item }) => {
    return (
      <ProductCard product={item} />
    )
  }

  const handleInput = (name, price) => {
    const productData = {
      name: name,
      price: price,
      // id: Math.random(),
      date: new Date(),
    }
    setArrayData([...arrayData, productData])
  }

  return (
    <View style={{ justifyContent: "space-between", flex: 1 }}>
      <Badge />
      <FlatList
        data={arrayData}
        renderItem={renderCard}
      />
      <ProductInput objectData={handleInput} />
    </View >
  )
}

export default App;
