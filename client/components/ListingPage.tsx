import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, Image, Paper, Text, Badge } from '@mantine/core';

const ListingPage = (props) => {
  const PRIMARY_COL_HEIGHT = 300;
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  console.log('props', props)
  // const [itemDescription, setItem] = useState(props);
  // @ts-ignore
  const [itemData, setItemData] = useState({});
  const getEndpoint = url => url.substring(url.lastIndexOf('/') + 1);


  useEffect(() => {
    const id = getEndpoint(window.location.href);
    fetch(`/api/items/listing/${id}`)
    .then(res => res.json())
    .then(data => setItemData(data.item[0]))
    .catch(err => console.error(err));
  }, []);


  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={PRIMARY_COL_HEIGHT}
          alt="Norway"
        />
        <Paper shadow="xs" p="md">
          <Text>Item Description</Text>
          <Text weight={500}>
            {/* @ts-ignore */}
            {itemData.name}
          </Text>
          <br></br>
        <Badge color="green" variant="light">
          {/* @ts-ignore */}
          ${itemData.cost}.00
        </Badge>
        </Paper>
        {/* <Grid gutter="md">
          <Grid.Col>
           
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid> */}
      </SimpleGrid>
    </Container>
  );
};

export default ListingPage;