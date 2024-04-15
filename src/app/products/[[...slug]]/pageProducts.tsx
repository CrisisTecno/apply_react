"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TitleBar from './titlebar';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

import { generateClient } from "@aws-amplify/api";
import { GraphQLQuery } from "@aws-amplify/api";
import { getProduct } from "@/graphql/queries";
import { GetProductQuery, Product } from "@/API";
import { listProducts } from "@/graphql/queries";
import { ListProductsQuery, Product } from "@/API";
import { getCategoryByName } from "@/graphql/queries";
import { GetCategoryByNameQuery, Category } from "@/API";
import { listCategories } from "@/graphql/queries";
import { ListCategoriesQuery, Category } from "@/API";
import { listCategoriesByName } from "@/graphql/queries";
import { ListCategoriesByNameQuery, Category } from "@/API";
import Portal from '@mui/material/Portal';
import { getUrl } from 'aws-amplify/storage';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { itemsTest } from './products';
import { useCart } from '@/app/hooks/context';
import { display, fontSize, padding, style } from '@mui/system';
import { FullscreenExitOutlined } from '@mui/icons-material';

import StarBorderIcon from '@mui/icons-material/StarBorder';
const client = generateClient();

function CategoryList() {
	const [rows, setRows] = useState<Category[]>([]);
	const router = useRouter();

	useEffect(() => {
		fetchCategories();
	}, []);

	async function fetchCategories() {
		try {

			// const x = await client.graphql({
			// 	query: listCategories,
			// });
			// const items = x.data.listCategories.items;
			console.log('fetchCategories:adasdS');
			const x = await client.graphql({
				query: listCategoriesByName,
				variables: { type: "Category" },
			});
			const items = x?.data?.listCategoriesByName?.items;
			console.log('fetchCategories:', items);
			setRows(items);
		} catch (err) {
			console.log('fetchCategories error:', err);
		}
	}

	return (

		<Grid container direction = "column" justifyContent = "left" alignItems = "left" display = "flex" >

		{
			rows.map((row) => (
				<Link key= { row.id } href = { "/products/category/" + row.name } underline = "none" > { row.name } < /Link>
			))
		}
			< /Grid>
	
	);
	//<Typography>All Products</Typography>
	//<Button onClick={(e) => Click(router,row.name)}>{row.name}</Button>
	//<Typography>{row.name}</Typography>
}

function ProductListItem({ row }: { row: {} }) {
	const { cart, addToCart } = useCart();
	const [value, setValue] = React.useState<number | null>(2);
	const [url, setUrl] = useState<string>();
	const [showPortal, setShowPortal] = useState(false);
	const router = useRouter();
	const [selectedProduct, setSelectedProduct] = useState<any>(null);

	useEffect(() => {

		console.log(row.media);

		fetchUrl(row.media);
	}, []);
	async function fetchUrl(media) {
		try {
			const getUrlResult = await getUrl({
				key: media,
			});
			console.log('fetchUrl:', getUrlResult.url);
			setUrl(getUrlResult.url);
		} catch (err) {
			console.log('fetchUrl error:', err);
		}
	}
	const DetailsClick: MouseEventHandler = (router, item: Product, e: MouseEvent) => {
		// console.log('DetailsClick:', item);
		// router.push(`/dashboard/item/${item.id}`);
		setShowPortal(true);
		setSelectedProduct(item);
    console.log('DetailsClick:', item);
	}
	const handleClosePortal = () => {
		setShowPortal(false);
	  };
	  const handleDetailsClick = (product: any) => {
		setSelectedProduct(product);
		setShowPortal(true);
	  };
	
	const AddToCartClick: MouseEventHandler = (router, item: Product, e: MouseEvent) => {
		//aca los cambios para agregar al carrito gfe
		console.log('AddToCartClick por aca:', item);
		console.log('AddToCartClick:', item);
		addToCart(item);
		console.log("los productos son:", cart)
	}
	return (
		<>
		{showPortal && (
			<Portal>
			  <div style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				zIndex: 1000,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			  }}>
				<div style={{
				  backgroundColor: '#fff',
				  padding: '20px',
				  borderRadius: '8px',
				  maxWidth: '80%', // Cambiar a '100%' para ocupar toda la pantalla
				  maxHeight: '80%', // Cambiar a '100%' para ocupar toda la pantalla
				  overflow: 'auto',
				}}>
				
				  
				  {selectedProduct && (
					<>
					  <div style={{display:"flex", flexDirection: "row" ,justifyContent:"center",alignItems: "center"}}>
					  <img
								src={ "https://www.rugbyafrique.com/wp-content/uploads/2020/09/600x600-1.jpg" }
				width = "600px"
				height = "600px"
				fit = "contain"
				/>
					  <div style={{marginLeft:"1vw",}} >

					  <h1 style={{color:"#635bf0",}}>{selectedProduct.name}</h1>
					  <h2 style={{color:"#000",fontSize:'25px'}}>Main Specifications</h2>

					  
		
					  <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        color: '#000',  
      }}
    >
   
        <StarBorderIcon />
    
      <Typography variant="body1">Batch:   </Typography>
      <Typography variant="body1">{selectedProduct.sku}</Typography>
    </div>
					  <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        color: '#000', 
      }}
    >
   
        <StarBorderIcon />
    
      <Typography variant="body1">Manufacturing:    </Typography>
      <Typography variant="body1">{selectedProduct.createdAt}</Typography>
    </div>
					  <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        color: '#000', 
      }}
    >
   
        <StarBorderIcon />
    
      <Typography variant="body1">Expire Date:   </Typography>
      <Typography variant="body1">{selectedProduct.createdAt}</Typography>
    </div>

	<div style={{display:"flex", flexDirection: "row" ,justifyContent:"center",alignItems: "center",marginTop:'2vh'}} >

	  <div>
	  <Typography component="legend" >Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
	  </div>
	< Button size = "small"  style={{
		backgroundColor: '#635bff',
		color: '#fff',
		width:'200px',
		border: 'none',
		padding: '5px 10px',
		borderRadius: '8px',
		margin:"10px 10px",
		cursor: 'pointer',
		outline: 'none',
		}} onClick = {(e) => AddToCartClick(router, selectedProduct)}> Add to cart < /Button>
	< Button size = "small"  style={{
		backgroundColor: '#635bff',
		color: '#fff',
		border: 'none',
		padding: '5px 10px',
		margin:"5px 10px",
		borderRadius: '8px',
		cursor: 'pointer',
		outline: 'none',
		}} onClick = {(e) => handleClosePortal()}> Close < /Button>

	</div>
					  

						</div>
						</div>
					</>
				  )}
				</div>
			  </div>
			</Portal>
		  )}
		<Card style= {{ display: 'flex' }
			} sx = {{ minWidth: 400, maxWidth: 420, minHeight: 180, maxHeight: 350,padding:'10px' }}>
				<Grid container >
				
				<Grid container direction = "column" >
									<img
									src={ url }
					width = "400px"
					height = "200px"
					fit = "contain"
					/>
												<div style={{ display: "flex", flexDirection: "column" ,justifyContent:"center",alignItems: "center"}}>
							<h1 style={{ fontSize: "20px"}} >{ row.name } < /h1>
										< CardActions >
										
										<Button size="small" style={{
								backgroundColor: '#635bff',
								color: '#fff',
								border: 'none',
								padding: '5px 10px',
								borderRadius: '8px',
								cursor: 'pointer',
								outline: 'none',
								}} onClick = {(e) => DetailsClick(router, row)}> Details < /Button>
											< Button size = "small"  style={{
								backgroundColor: '#635bff',
								color: '#fff',
								border: 'none',
								padding: '5px 10px',
								borderRadius: '8px',
								cursor: 'pointer',
								outline: 'none',
								}} onClick = {(e) => AddToCartClick(router, row)}> Add to Cart < /Button>
												< /CardActions>
						</div>
						< /Grid>
						< /Grid>
						< /Card>
		</>
	);
}


function ProductList({ category }: { category: string }) {
	const [rows, setRows] = useState<Product[]>([]);

	useEffect(() => {
		fetchProducts(category);
	}, []);

	async function fetchProducts(category: string) {
		try {
			console.log("QUERY:", category);
			/*
			filtering won't work for large numbers (>100) of rows
						const variables = {
							filter: {
								available: {eq: true}
							}
						}
						const allProducts = await client.graphql({
							query: listProducts,
							variables: variables,
						});
			*/
			if (category === "All") {
				// const allProducts = await client.graphql({
				// 	query: listProducts,
				// });
				// console.log('fetchProducts All:', allProducts.data.listProducts.items);
				console.log(itemsTest);
				setRows(itemsTest);
			} else {
				const customQuery = /* GraphQL */ `query GetCategoryByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  getCategoryByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      products {
        nextToken
        __typename
        items {
          product {
            available
            description
            createdAt
            factoryID
            id
            media
            name
            price
            sku
            msrp
          }
        }
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
					APITypes.GetCategoryByNameQueryVariables,
					APITypes.GetCategoryByNameQuery
				>;

				const allProducts = await client.graphql({
					query: customQuery,
					variables: {
						name: category,
					},
				});
				//console.log('fetchProducts '+category+':', allProducts);
				const rows = allProducts.data.getCategoryByName.items[0].products.items;
				console.log('fetchProducts ' + category + ':', rows);
				setRows(rows);
			}
		} catch (err) {
			console.log('fetchProducts error:', err);
		}
	}

	return (
		
		<Paper sx={{ width: '100%' }}>
		<div style={{marginTop:"30px",marginBottom:"30px",marginLeft:"10px"}}>
		  <Grid container spacing={3}>
			<CategoryList />
			<Grid container justifyContent="center" alignItems="center">
			  {rows.map((row) => (
				<Grid item key={row.id}>
				  <ProductListItem row={row} />
				</Grid>
			  ))}
			</Grid>
		  </Grid>
		  </div>
		</Paper>
		
	  );
	  
}

function ProductDetailsItem({ row }: { row: {} }) {
	const { cart, addToCart } = useCart();
	const [url, setUrl] = useState<string>();
	const router = useRouter();

	console.log("ProductDetailsItem:", itemsTest[0]);
	// console.log("ProductDetailsItem:", row);
	row = itemsTest[0]
	useEffect(() => {
		fetchUrl(row.media);
	}, []);

	async function fetchUrl(media) {
		try {
			const getUrlResult = await getUrl({
				key: media,
			});
			console.log('fetchUrl:', getUrlResult.url);
			setUrl(getUrlResult.url);
		} catch (err) {
			console.log('fetchUrl error:', err);
		}
	}

	// const AddToCartClick: MouseEventHandler = (router, item: Product, e: MouseEvent) => {
	// 	console.log('AddToCartClick:', item);
	// }
	const AddToCartClick: MouseEventHandler = (router, item: Product, e: MouseEvent) => {
		//aca los cambios para agregar al carrito gfe
		console.log('AddToCartClick por aca:', item);
		console.log('AddToCartClick:', item);
		addToCart(item);
		console.log("los productos son:", cart)


	}

	return (
		<div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "row", width: "100%", marginTop: "30px", marginBottom: "30px" }}>
  <Card style={{ display: 'flex' }} sx={{ minWidth: 400, minHeight: 180 }}>
    <Grid container justifyContent="center">
      <Grid item>
        <img
          src={url}
          width="512px"
          height="512px"
          fit="contain"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{row.name}</Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">{row.description}</Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">Est consequat veniam cupidatat magna minim incididunt ipsum eiusmod sint enim officia elit quis est.</Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">Est consequat veniam cupidatat magna minim incididunt ipsum eiusmod sint enim officia elit quis est.</Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">Price: ${row.price}</Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">MSRP: ${row.msrp}</Typography>
        </CardContent>
        <CardActions>
		<Button
		size="small"
		onClick={(e) => AddToCartClick(router, row)}
		style={{
		  backgroundColor: '#F3A30C',
		  color: '#fff',
		  border: 'none',
		  padding: '10px 20px',
		  borderRadius: '10px',
		  cursor: 'pointer',
		  outline: 'none',
		}}
	  >
		Add to Cart
	  </Button>
	  
        </CardActions>
      </Grid>
    </Grid>
  </Card>
</div>

	  

	  );
	  
}

function ProductDetails({ id }: { id: string }) {
	const [row, setRow] = useState<Product>({});

	useEffect(() => {
		fetchProduct();
	}, []);

	async function fetchProduct() {
		try {
			const x = await client.graphql({
				query: getProduct,
				variables: {
					id: id,
				},
			});

			// console.log('fetchProduct:', x.data.getProduct);
			// setRow(x.data.getProduct);
			console.log('fetchProduct details:', itemsTest[0]);
			setRow(itemsTest[0]);
		} catch (err) {
			console.log('fetchProduct error:', err);
		}
	}

	return (
		<Paper sx= {{ width: '100%' }
}>
	<Grid container display = "flex" >
		<CategoryList />
		< Grid container display = "flex" justifyContent = "center" alignItems = "center" >
			<ProductDetailsItem row={ row } />
				< /Grid>
				< /Grid>
				< /Paper>
	);
}

function Stuff({ params }: { params: { slug?: string } }) {
	if (params.slug) {
		console.log("SLUG DEFINED");
		if ((params.slug[0] == "category") && (params.slug[1] != "")) {
			console.log("CATEGORY:", params.slug[1]);
			const category = params.slug[1];
			return (
				<ProductList category= { category } />
			);
		} else if ((params.slug[0] == "item") && (params.slug[1] != "")) {
			console.log("DETAILS:", params.slug[1]);
			const id = params.slug[1];
			return (
				<ProductDetails id= { id } />
			);
		}
	} else {
		console.log("LIST ALL PRODUCTS");
		return (
			<ProductList category= "All" />
		);
	}
}

function ProductsContent({ params }: { params: { slug?: string } }) {
	return (
		<Grid container direction = "column" >
			

			< Stuff params = { params } />
				</Grid>
	);
}

function ProductsLoading() {
	return (<div>Loading products...</div>);
}

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default function Products({ params }: { params: { slug?: string } }) {
	console.log("params2=", params);
	const uri = params.slug ? ("/" + params.slug.join("/")) : "";
	const url = '/products' + uri;
	return <ProductsContent params={params} />;
  }