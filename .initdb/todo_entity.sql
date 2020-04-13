-- Table: public.todo_entity

DROP TABLE IF EXISTS public.todo_entity;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public.todo_entity
(
    date date,
    id uuid NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    label text COLLATE pg_catalog."default",
    tag text COLLATE pg_catalog."default",
    CONSTRAINT todo_entity_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.todo_entity
    OWNER to postgres;
