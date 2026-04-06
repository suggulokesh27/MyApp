import { ActivityIndicator, FlatList, View } from 'react-native';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title?: string;
  description?: string;
  images?: string[];
  category?: {
    name: string;
  };
  price?: number;
};

function ProductsScreen({ navigation }: any) {

const [visibleData, setVisibleData] = useState<Product[]>([]);
const [hasMore, setHasMore] = useState(true);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const itemsPerPage = 8;

const fetchProducts = async ({ offset, limit }: { offset: number; limit: number }) => {
  try {
    setLoading(true);

    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    );

    const data = await response.json();

    if (data.length === 0) {
      setHasMore(false); 
      return;
    }

    setVisibleData((prev) => [...prev, ...data]);
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setLoading(false);
  }
};

const loadMore = () => {
  if (loading || !hasMore) return; 

  const nextPage = page + 1;
  const offset = page * itemsPerPage;

  fetchProducts({ offset, limit: itemsPerPage });
  setPage(nextPage);
};
useEffect(() => {
  fetchProducts({ offset: 0, limit: itemsPerPage });
}, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={visibleData}
        numColumns={2}
        key={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard product={item} navigation={navigation} />
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
  ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
   onEndReached={loadMore} // ✅ trigger pagination
  onEndReachedThreshold={0.5}
  ListFooterComponent={() =>
  loading ? <ActivityIndicator size="large" /> : null
}
      />
    </View>
  );
}

export default ProductsScreen;
