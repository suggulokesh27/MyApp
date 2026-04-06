import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ProductCard = ({ product, navigation }: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetails", { product })}
    >
      {/* Product Image */}
      <Image
        source={{ uri: product.images?.[0] }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Product Info */}
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {product.title}
        </Text>

        <Text style={styles.price}>₹ {product.price}</Text>

        <Text style={styles.category}>
          {product.category?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3, // Android shadow
  },

  image: {
    width: "100%",
    height: 140,
  },

  content: {
    padding: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
    color: "green",
  },

  category: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },
});

export default ProductCard;