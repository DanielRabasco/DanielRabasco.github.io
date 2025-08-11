--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.projects (
    id character varying(255) NOT NULL,
    image character varying(100),
    title character varying(255) NOT NULL,
    description text,
    link character varying(255)
);


ALTER TABLE public.projects OWNER TO admin;

--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.projects (id, image, title, description, link) FROM stdin;
vr-training	🕶️	VR Industrial Training System	Created a Virtual Reality system for training automotive seat assembly workers, using Unity and OptiTrack motion capture technology. The project was part of the SIEMA initiative for immersive industrial training.	https://github.com/DanielRabasco/vr-training-repo
platform-integration	🔗	Platform Integration at CogniFit	Led software integrations with third-party platforms as a Product Manager. Coordinated cross-functional teams to ensure smooth interoperability and optimized data flow between systems.	https://github.com/DanielRabasco/platform-integration-repo
cognitive-games	🧠	Cognitive Training Games	Advanced 2D/3D videogame development for cognitive training. Integrated into a web platform using Angular, Phaser, and PlayCanvas. Features AI-driven adaptive difficulty and real-time feedback.	https://github.com/DanielRabasco/cognitive-games-repo
\.


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

