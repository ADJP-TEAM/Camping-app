import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { idText } from 'typescript';

const CardComponent = (props) => {
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate('/listing', { 
      replace: true, state: { id: props.id, itemName: props.itemName, itemDescription: props.itemDescription, pricePerDay: props.pricePerDay, location: props.location 
      } }), [navigate, props]);
  


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
        <Badge color="pink" variant="light">
          {props.id}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.itemDescription}
      </Text>

      <Button onClick={handleClick} variant="light" color="blue" fullWidth mt="md" radius="md">
        Reserve Item(s)
      </Button>
    </Card>
  );
};

export default CardComponent;