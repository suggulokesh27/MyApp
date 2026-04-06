import { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";

function ProductDetailsScreen({ route }: any) {
  const { product } = route.params;
const { width } = Dimensions.get("window");
const [activeIndex, setActiveIndex] = useState(0);

  return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>
        {product.title}
      </Text>
      <Text style={styles.discription}>
        {product.description}
      </Text>
    </View>
    <View>
      <FlatList
  data={product.images}
  horizontal
  pagingEnabled // ✅ swipe like carousel
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <Image
      source={{ uri: item }}
      style={[styles.image, { width: width - 32 }]}
      resizeMode="cover"
    />
  )}
  onMomentumScrollEnd={(e) => {
  const index = Math.round(
    e.nativeEvent.contentOffset.x / (width - 32)
  );
  setActiveIndex(index);
}}
/>
<View style={{ flexDirection: "row", justifyContent: "center", marginTop: 8 }}>
  {product.images.map((_: any, index: number) => (
    <View
      key={index}
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        backgroundColor: activeIndex === index ? "#000" : "#ccc",
      }}
    />
  ))}
</View>
    </View>
    <View style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 16
    }}>
      <Text style={styles.price}>
        {`Price: $${product.price}`}
      </Text>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container : {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#fff",
    flex: 1
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16  
  },
  header:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16
  },
  title:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8
  },
  discription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  }
});

export default ProductDetailsScreen;