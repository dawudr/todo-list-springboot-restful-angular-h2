package com.dawud.todo.repository;

import com.dawud.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by dawud.rahman on 11/10/2017.
 */
@RepositoryRestResource
public interface TodoRepository extends JpaRepository<Todo, Long> {

}
