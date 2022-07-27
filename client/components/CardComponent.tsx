import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { idText } from 'typescript';
import ListingPage from './ListingPage';

const CardComponent = (props) => {
  // const navigate = useNavigate();
  // const handleClick = useCallback(
  //   () => navigate('/listing', { 
  //     replace: true, state: { id: props.id, itemName: props.itemName, itemDescription: props.itemDescription, pricePerDay: props.pricePerDay, location: props.location 
  //     } }), [navigate, props]);
  


  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{props.itemName}</Text>
        <Badge color="green" variant="light">
          ${props.price}.00
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.itemDescription}
      </Text>

      <Link to={`/listing/${props.id}`}>
        Reserve Item(s)
      </Link>
      {/* <Button onClick={handleClick} variant="light" color="blue" fullWidth mt="md" radius="md">
        Reserve Item(s)
      </Button> */}
    </Card>
  );
};

export default CardComponent;